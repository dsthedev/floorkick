import type { DeleteNoteMutationVariables, FindNotes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Note/NotesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_NOTE_MUTATION = gql`
  mutation DeleteNoteMutation($id: Int!) {
    deleteNote(id: $id) {
      id
    }
  }
`

const NotesList = ({ notes }: FindNotes) => {
  const [deleteNote] = useMutation(DELETE_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Note deleted')
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

  const onDeleteClick = (id: DeleteNoteMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete note ' + id + '?')) {
      deleteNote({ variables: { id } })
    }
  }

  return (
    <div className="segment table-wrapper-responsive">
      <table className="table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th colSpan={2}>
              <small className="text-center">
                {'[Notice: This is a beta feature, subject to change]'}
              </small>
            </th>
            {/* <th>User id</th> */}
            {/* <th>Created at</th> */}
            {/* <th>Updated at</th> */}
            {/* <th>&nbsp;</th> */}
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              {/* <td>{truncate(note.id)}</td> */}
              <td>{truncate(note.body)}</td>
              {/* <td>{truncate(note.userId)}</td> */}
              {/* <td>{timeTag(note.createdAt)}</td> */}
              {/* <td>{timeTag(note.updatedAt)}</td> */}
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.note({ id: note.id })}
                    title={'Show note ' + note.id + ' detail'}
                    className="button button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNote({ id: note.id })}
                    title={'Edit note ' + note.id}
                    className="button button-small button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete note ' + note.id}
                    className="button button-small button-red"
                    onClick={() => onDeleteClick(note.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NotesList
