import type { FindServiceRates } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ServiceRates from 'src/components/Core/ServiceRate/ServiceRates'

export const QUERY = gql`
  query FindServiceRates {
    serviceRates {
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

export const Empty = () => {
  return (
    <div className="text-center">
      <h5>{'No Rates Found'}</h5>
      <Link to={routes.newServiceRate()} className="rw-link">
        {'New Rate'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  serviceRates,
}: CellSuccessProps<FindServiceRates>) => {
  return <ServiceRates serviceRates={serviceRates} />
}
