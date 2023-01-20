import type { EditServiceRateById, UpdateServiceRateInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ServiceRateForm from 'src/components/ServiceRate/ServiceRateForm'

export const QUERY = gql`
  query EditServiceRateById($id: Int!) {
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
const UPDATE_SERVICE_RATE_MUTATION = gql`
  mutation UpdateServiceRateMutation(
    $id: Int!
    $input: UpdateServiceRateInput!
  ) {
    updateServiceRate(id: $id, input: $input) {
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

export const Empty = () => <div>Empty...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({
  serviceRate,
}: CellSuccessProps<EditServiceRateById>) => {
  const [updateServiceRate, { loading, error }] = useMutation(
    UPDATE_SERVICE_RATE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ServiceRate updated')
        navigate(routes.serviceRates())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateServiceRateInput,
    id: EditServiceRateById['serviceRate']['id']
  ) => {
    updateServiceRate({ variables: { id, input } })
  }

  return (
    <div className="segment">
      <header className="segment-header">
        <h2 className="heading heading-secondary">
          {serviceRate?.type + ' ' + serviceRate?.material}
        </h2>
      </header>
      <div className="segment-main">
        <ServiceRateForm
          serviceRate={serviceRate}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
