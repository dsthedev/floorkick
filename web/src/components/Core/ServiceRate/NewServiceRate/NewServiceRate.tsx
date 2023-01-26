import type { CreateServiceRateInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ServiceRateForm from 'src/components/Core/ServiceRate/ServiceRateForm'

const CREATE_SERVICE_RATE_MUTATION = gql`
  mutation CreateServiceRateMutation($input: CreateServiceRateInput!) {
    createServiceRate(input: $input) {
      id
    }
  }
`

const NewServiceRate = () => {
  const [createServiceRate, { loading, error }] = useMutation(
    CREATE_SERVICE_RATE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Rate Added')
        navigate(routes.serviceRates())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateServiceRateInput) => {
    createServiceRate({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Rate</h2>
      </header>
      <div className="rw-segment-main">
        <ServiceRateForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewServiceRate
