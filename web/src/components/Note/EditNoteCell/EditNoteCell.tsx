import type { EditNoteById, UpdateNoteInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NoteForm from 'src/components/Note/NoteForm'

export const QUERY = gql`
  query EditNoteById($id: Int!) {
    note: note(id: $id) {
      id
      body
      userId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_NOTE_MUTATION = gql`
  mutation UpdateNoteMutation($id: Int!, $input: UpdateNoteInput!) {
    updateNote(id: $id, input: $input) {
      id
      body
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ note }: CellSuccessProps<EditNoteById>) => {
  const { currentUser } = useAuth()

  const [updateNote, { loading, error }] = useMutation(UPDATE_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Note updated')
      navigate(routes.notes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateNoteInput, id: EditNoteById['note']['id']) => {
    updateNote({ variables: { id, input } })
  }

  if (note.userId === currentUser.id) {
    return (
      <div className="segment">
        <header className="segment-header">
          <h2 className="heading heading-secondary">Edit Note #{note?.id}</h2>
        </header>
        <div className="segment-main">
          <NoteForm
            note={note}
            onSave={onSave}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    )
  } else {
    return navigate(routes.notes())
  }
}
