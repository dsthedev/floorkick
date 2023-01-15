import type { FindNotes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Notes from 'src/components/Note/Notes'

export const QUERY = gql`
  query FindNotes {
    notes {
      id
      body
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No notes yet. '}
      <Link to={routes.newNote()} className="link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ notes }: CellSuccessProps<FindNotes>) => {
  return <Notes notes={notes} />
}
