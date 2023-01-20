import type { DeleteNoteMutationVariables, FindNoteById } from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_NOTE_MUTATION = gql`
  mutation DeleteNoteMutation($id: Int!) {
    deleteNote(id: $id) {
      id
    }
  }
`

interface Props {
  note: NonNullable<FindNoteById['note']>
}

const Note = ({ note }: Props) => {
  const [deleteNote] = useMutation(DELETE_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Note deleted')
      navigate(routes.notes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteNoteMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete note ' + id + '?')) {
      deleteNote({ variables: { id } })
    }
  }

  return (
    <>
      <div className="segment">
        <header className="segment-header">
          <h2 className="heading heading-secondary">Note {note.id} Detail</h2>
        </header>
        <table className="table">
          <tbody>
            {/* <tr>
              <th>Id</th>
              <td>{note.id}</td>
            </tr> */}
            <tr>
              <th>Title</th>
              <td>{note.title}</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>{note.content}</td>
            </tr>
            {/* <tr>
              <th>Author id</th>
              <td>{note.authorId}</td>
            </tr> */}
            {/* <tr>
              <th>Created at</th>
              <td>{timeTag(note.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(note.updatedAt)}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <nav className="buttongroup">
        <Link
          to={routes.editNote({ id: note.id })}
          className="button secondary"
        >
          Edit
        </Link>
        <button
          type="button"
          className="button alert"
          onClick={() => onDeleteClick(note.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Note
