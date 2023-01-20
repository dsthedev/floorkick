import type { DeleteNoteMutationVariables, FindNotes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DownloadAsFile from 'src/components/fn/DownloadAsFile/DownloadAsFile'
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

  const exportToJson = (e) => {
    e.preventDefault()
    DownloadAsFile({
      data: JSON.stringify(notes),
      fileName: 'my-floorkick-notes.json',
      fileType: 'text/json',
    })
  }

  return (
    <div className="segment table-wrapper-responsive">
      <h2>My Notes</h2>
      <table className="table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Title</th>
            {/* <th>Content</th> */}
            {/* <th>Author id</th> */}
            {/* <th>Created at</th> */}
            {/* <th>Updated at</th> */}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              {/* <td>{truncate(note.id)}</td> */}
              <td>{truncate(note.title)}</td>
              {/* <td>{truncate(note.content)}</td> */}
              {/* <td>{truncate(note.authorId)}</td> */}
              {/* <td>{timeTag(note.createdAt)}</td> */}
              {/* <td>{timeTag(note.updatedAt)}</td> */}
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.note({ id: note.id })}
                    title={'Show note ' + note.id + ' detail'}
                    className="button small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNote({ id: note.id })}
                    title={'Edit note ' + note.id}
                    className="button small secondary"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete note ' + note.id}
                    className="button small alert"
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
      <section className="text-right">
        <button onClick={exportToJson} className="button tiny warning">
          Download All as JSON
        </button>
      </section>
    </div>
  )
}

export default NotesList
