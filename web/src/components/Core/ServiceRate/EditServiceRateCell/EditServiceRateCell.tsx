import type { EditServiceRateById, UpdateServiceRateInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ServiceRateForm from 'src/components/Core/ServiceRate/ServiceRateForm'

export const QUERY = gql`
  query EditServiceRateById($id: Int!) {
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
const UPDATE_SERVICE_RATE_MUTATION = gql`
  mutation UpdateServiceRateMutation(
    $id: Int!
    $input: UpdateServiceRateInput!
  ) {
    updateServiceRate(id: $id, input: $input) {
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

export const Empty = () => <h5>Rate Note Found</h5>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
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
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="h3">
          Edit: {serviceRate?.task + ' ' + serviceRate?.material}{' '}
          {' ' + serviceRate?.modifiers}
        </h2>
      </header>
      <div className="rw-segment-main">
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
