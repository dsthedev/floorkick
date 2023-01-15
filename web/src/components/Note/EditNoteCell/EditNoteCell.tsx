import type { EditNoteById, UpdateNoteInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'
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
  <div className="rw-cell-error">{error?.message}</div>
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
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Edit Note #{note?.id}
          </h2>
        </header>
        <div className="rw-segment-main">
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
    return <Redirect to={routes.notes()}></Redirect>
  }
}
