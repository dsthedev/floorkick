import type { FindNoteById } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Note from 'src/components/Note/Note'

export const QUERY = gql`
  query FindNoteById($id: Int!) {
    note: note(id: $id) {
      id
      body
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Note not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ note }: CellSuccessProps<FindNoteById>) => {
  const { currentUser } = useAuth()

  if (note.userId === currentUser.id) {
    return <Note note={note} />
  } else {
    return navigate(routes.notes())
  }
}
