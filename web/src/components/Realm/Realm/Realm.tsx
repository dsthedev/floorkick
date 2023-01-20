import type { DeleteRealmMutationVariables, FindRealmById } from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_REALM_MUTATION = gql`
  mutation DeleteRealmMutation($id: Int!) {
    deleteRealm(id: $id) {
      id
    }
  }
`

interface Props {
  realm: NonNullable<FindRealmById['realm']>
}

const Realm = ({ realm }: Props) => {
  const [deleteRealm] = useMutation(DELETE_REALM_MUTATION, {
    onCompleted: () => {
      toast.success('Realm deleted')
      navigate(routes.realms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteRealmMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete realm ' + id + '?')) {
      deleteRealm({ variables: { id } })
    }
  }

  return (
    <>
      <div className="segment">
        <header className="segment-header">
          <h2 className="heading heading-secondary">Realm {realm.id} Detail</h2>
        </header>
        <table className="table">
          <tbody>
            {/* <tr>
              <th>Id</th>
              <td>{realm.id}</td>
            </tr> */}
            <tr>
              <th>Title</th>
              <td>{realm.title}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{realm.address}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{realm.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{realm.state}</td>
            </tr>
            <tr>
              <th>Zip</th>
              <td>{realm.zip}</td>
            </tr>
            {/* <tr>
              <th>Lat, Long</th>
              <td>
                <code>
                  {realm.lat}, {realm.long}
                </code>
              </td>
            </tr> */}
            {/* <tr>
              <th>Owner id</th>
              <td>{realm.ownerId}</td>
            </tr> */}
            {/* <tr>
              <th>Created at</th>
              <td>{timeTag(realm.createdAt)}</td>
            </tr> */}
            {/* <tr>
              <th>Updated at</th>
              <td>{timeTag(realm.updatedAt)}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <nav className="buttongroup">
        <Link
          to={routes.editRealm({ id: realm.id })}
          className="button secondary"
        >
          Edit
        </Link>
        <button
          type="button"
          className="button alert"
          onClick={() => onDeleteClick(realm.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Realm
