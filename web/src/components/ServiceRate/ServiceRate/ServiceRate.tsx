import type {
  DeleteServiceRateMutationVariables,
  FindServiceRateById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_SERVICE_RATE_MUTATION = gql`
  mutation DeleteServiceRateMutation($id: Int!) {
    deleteServiceRate(id: $id) {
      id
    }
  }
`

interface Props {
  serviceRate: NonNullable<FindServiceRateById['serviceRate']>
}

const ServiceRate = ({ serviceRate }: Props) => {
  const [deleteServiceRate] = useMutation(DELETE_SERVICE_RATE_MUTATION, {
    onCompleted: () => {
      toast.success('ServiceRate deleted')
      navigate(routes.serviceRates())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteServiceRateMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete serviceRate ' + id + '?')) {
      deleteServiceRate({ variables: { id } })
    }
  }

  return (
    <>
      <div className="segment">
        <header className="segment-header">
          <h2 className="heading heading-secondary">
            ServiceRate {serviceRate.id} Detail
          </h2>
        </header>
        <table className="table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{serviceRate.id}</td>
            </tr>
            <tr>
              <th>Uuid</th>
              <td>{serviceRate.uuid}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{serviceRate.name}</td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{serviceRate.value}</td>
            </tr>
            <tr>
              <th>Currency</th>
              <td>{serviceRate.currency}</td>
            </tr>
            <tr>
              <th>Unit</th>
              <td>{serviceRate.unit}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{serviceRate.type}</td>
            </tr>
            <tr>
              <th>Material</th>
              <td>{serviceRate.material}</td>
            </tr>
            <tr>
              <th>Modifiers</th>
              <td>{serviceRate.modifiers}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{serviceRate.description}</td>
            </tr>
            <tr>
              <th>Owner id</th>
              <td>{serviceRate.ownerId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(serviceRate.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(serviceRate.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="buttongroup">
        <Link
          to={routes.editServiceRate({ id: serviceRate.id })}
          className="button secondary"
        >
          Edit
        </Link>
        <button
          type="button"
          className="button alert"
          onClick={() => onDeleteClick(serviceRate.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ServiceRate
