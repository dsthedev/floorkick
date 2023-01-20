import type { EditNoteById, UpdateNoteInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NoteForm from 'src/components/Note/NoteForm'

export const QUERY = gql`
  query EditNoteById($id: Int!) {
    note: note(id: $id) {
      id
      title
      content
      authorId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_NOTE_MUTATION = gql`
  mutation UpdateNoteMutation($id: Int!, $input: UpdateNoteInput!) {
    updateNote(id: $id, input: $input) {
      id
      title
      content
      authorId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ note }: CellSuccessProps<EditNoteById>) => {
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

  return (
    <div className="segment">
      <header className="segment-header">
        <h2 className="heading heading-secondary">
          Edit Note {note?.id}
        </h2>
      </header>
      <div className="segment-main">
        <NoteForm note={note} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
