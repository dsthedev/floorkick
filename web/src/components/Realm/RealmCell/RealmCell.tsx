import type { FindRealmById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Realm from 'src/components/Realm/Realm'

export const QUERY = gql`
  query FindRealmById($id: Int!) {
    realm: realm(id: $id) {
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

export const Empty = () => <div>Realm not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ realm }: CellSuccessProps<FindRealmById>) => {
  return <Realm realm={realm} />
}
