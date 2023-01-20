import type { FindServiceRates } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ServiceRates from 'src/components/ServiceRate/ServiceRates'

export const QUERY = gql`
  query FindServiceRates {
    serviceRates {
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

export const Empty = () => {
  return (
    <div className="callout small secondary">
      {'No serviceRates yet. '}
      <Link to={routes.newServiceRate()} className="button">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({
  serviceRates,
}: CellSuccessProps<FindServiceRates>) => {
  return <ServiceRates serviceRates={serviceRates} />
}
