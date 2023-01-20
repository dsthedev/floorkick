import type { DeleteUserMutationVariables, FindUsers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DownloadAsFile from 'src/components/fn/DownloadAsFile/DownloadAsFile'
import { QUERY } from 'src/components/User/UsersCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const UsersList = ({ users }: FindUsers) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteUserMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  const exportToJson = (e) => {
    e.preventDefault()
    DownloadAsFile({
      data: JSON.stringify(users),
      fileName: 'floorkick-users.json',
      fileType: 'text/json',
    })
  }

  return (
    <div className="segment table-wrapper-responsive">
      <h2>Users</h2>
      <table className="table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Email</th>
            {/* <th>Hashed password</th> */}
            {/* <th>Salt</th> */}
            {/* <th>Reset token</th> */}
            {/* <th>Reset token expires at</th> */}
            <th>Name</th>
            <th>Roles</th>
            {/* <th>Created at</th>
            <th>Updated at</th> */}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {/* <td>{truncate(user.id)}</td> */}
              <td>{truncate(user.email)}</td>
              {/* <td>{truncate(user.hashedPassword)}</td> */}
              {/* <td>{truncate(user.salt)}</td> */}
              {/* <td>{truncate(user.resetToken)}</td> */}
              {/* <td>{timeTag(user.resetTokenExpiresAt)}</td> */}
              <td>{truncate(user.name)}</td>
              <td>{truncate(user.roles)}</td>
              {/* <td>{timeTag(user.createdAt)}</td>
              <td>{timeTag(user.updatedAt)}</td> */}
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.user({ id: user.id })}
                    title={'Show user ' + user.id + ' detail'}
                    className="button small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUser({ id: user.id })}
                    title={'Edit user ' + user.id}
                    className="button small secondary"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete user ' + user.id}
                    className="button small alert"
                    onClick={() => onDeleteClick(user.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="text-right">
        <button onClick={exportToJson} className="button tiny warning">
          Download All as JSON
        </button>
      </section>
    </div>
  )
}

export default UsersList
