import type { FindServiceRateById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ServiceRate from 'src/components/Core/ServiceRate/ServiceRate'

export const QUERY = gql`
  query FindServiceRateById($id: Int!) {
    serviceRate: serviceRate(id: $id) {
      id
      value
      unit
      task
      material
      modifiers
      description
      authorId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ServiceRate not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ serviceRate }: CellSuccessProps<FindServiceRateById>) => {
  return <ServiceRate serviceRate={serviceRate} />
}
