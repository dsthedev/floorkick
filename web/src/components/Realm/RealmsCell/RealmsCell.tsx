import type { FindRealms } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Realms from 'src/components/Realm/Realms'

export const QUERY = gql`
  query FindRealms {
    realms {
      id
      title
      address
      city
      state
      zip
      lat
      long
      ownerId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="callout small secondary">
      {'No realms yet. '}
      <Link to={routes.newRealm()} className="button">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ realms }: CellSuccessProps<FindRealms>) => {
  return <Realms realms={realms} />
}
