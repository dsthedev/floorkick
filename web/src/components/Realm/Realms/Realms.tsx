import type { DeleteRealmMutationVariables, FindRealms } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DownloadAsFile from 'src/components/fn/DownloadAsFile/DownloadAsFile'
import { QUERY } from 'src/components/Realm/RealmsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_REALM_MUTATION = gql`
  mutation DeleteRealmMutation($id: Int!) {
    deleteRealm(id: $id) {
      id
    }
  }
`

const RealmsList = ({ realms }: FindRealms) => {
  const [deleteRealm] = useMutation(DELETE_REALM_MUTATION, {
    onCompleted: () => {
      toast.success('Realm deleted')
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

  const onDeleteClick = (id: DeleteRealmMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete realm ' + id + '?')) {
      deleteRealm({ variables: { id } })
    }
  }

  const exportToJson = (e) => {
    e.preventDefault()
    DownloadAsFile({
      data: JSON.stringify(realms),
      fileName: 'my-floorkick-addresses.json',
      fileType: 'text/json',
    })
  }

  return (
    <div className="segment table-wrapper-responsive">
      <table className="table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Title</th>
            <th>Address</th>
            {/* <th>City</th> */}
            {/* <th>State</th> */}
            {/* <th>Zip</th> */}
            {/* <th>Lat</th> */}
            {/* <th>Long</th> */}
            {/* <th>Owner id</th> */}
            {/* <th>Created at</th> */}
            {/* <th>Updated at</th> */}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {realms.map((realm) => (
            <tr key={realm.id}>
              {/* <td>{truncate(realm.id)}</td> */}
              <td>{truncate(realm.title)}</td>
              <td>{truncate(realm.address)}</td>
              {/* <td>{truncate(realm.city)}</td> */}
              {/* <td>{truncate(realm.state)}</td> */}
              {/* <td>{truncate(realm.zip)}</td> */}
              {/* <td>{truncate(realm.lat)}</td> */}
              {/* <td>{truncate(realm.long)}</td> */}
              {/* <td>{truncate(realm.ownerId)}</td> */}
              {/* <td>{timeTag(realm.createdAt)}</td> */}
              {/* <td>{timeTag(realm.updatedAt)}</td> */}
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.realm({ id: realm.id })}
                    title={'Show realm ' + realm.id + ' detail'}
                    className="button small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRealm({ id: realm.id })}
                    title={'Edit realm ' + realm.id}
                    className="button small secondary"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete realm ' + realm.id}
                    className="button small alert"
                    onClick={() => onDeleteClick(realm.id)}
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

export default RealmsList
