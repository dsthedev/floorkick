import type { FindServiceRateById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ServiceRate from 'src/components/ServiceRate/ServiceRate'

export const QUERY = gql`
  query FindServiceRateById($id: Int!) {
    serviceRate: serviceRate(id: $id) {
      id
      uuid
      name
      value
      currency
      unit
      type
      material
      modifiers
      description
      ownerId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ServiceRate not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ serviceRate }: CellSuccessProps<FindServiceRateById>) => {
  return <ServiceRate serviceRate={serviceRate} />
}
