import { useState, useEffect } from 'react'

import type {
  DeleteServiceRateMutationVariables,
  FindServiceRates,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DisplayCurrency from 'src/components/fn/DisplayCurrency/DisplayCurrency'
import DownloadAsFile from 'src/components/fn/DownloadAsFile/DownloadAsFile'
import { QUERY } from 'src/components/ServiceRate/ServiceRatesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_SERVICE_RATE_MUTATION = gql`
  mutation DeleteServiceRateMutation($id: Int!) {
    deleteServiceRate(id: $id) {
      id
    }
  }
`

const ServiceRatesList = ({ serviceRates }: FindServiceRates) => {
  const [search, setSearch] = React.useState('')
  const [results, setResults] = React.useState([])

  const [deleteServiceRate] = useMutation(DELETE_SERVICE_RATE_MUTATION, {
    onCompleted: () => {
      toast.success('Rate Deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteServiceRateMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete rate: ' + id + '?')) {
      deleteServiceRate({ variables: { id } })
    }
  }

  const exportToJson = (e) => {
    e.preventDefault()
    DownloadAsFile({
      data: JSON.stringify(serviceRates),
      fileName: 'my-floorkick-rates.json',
      fileType: 'text/json',
    })
  }

  useEffect(() => {
    let searchResults
    if (search) {
      searchResults = serviceRates.filter((i) =>
        i.material.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      searchResults = serviceRates
    }
    setResults(searchResults)
  }, [search, serviceRates])

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="segment table-wrapper-responsive">
      <div className="input-group">
        <div className="input-group-label">{'Filter'}</div>
        <div className="input-group-field">
          <input
            type="text"
            value={search}
            onChange={(e) => handleInput(e)}
            placeholder="Carpet, LVT, Trim..."
          />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            {/* <th>Uuid</th> */}
            {/* <th>Name</th> */}
            <th>Rate</th>
            {/* <th>Currency</th> */}
            <th>Per</th>
            <th>Task</th>
            <th>For</th>
            {/* <th>Extra</th> */}
            {/* <th>Description</th> */}
            {/* <th>Owner id</th> */}
            {/* <th>Created at</th> */}
            {/* <th>Updated at</th> */}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {results.map((serviceRate) => (
            <tr key={serviceRate.id}>
              {/* <td>{truncate(serviceRate.id)}</td> */}
              {/* <td>{truncate(serviceRate.uuid)}</td> */}
              {/* <td>{truncate(serviceRate.name)}</td> */}
              <td className="text-right">
                {DisplayCurrency(
                  truncate(serviceRate.value),
                  truncate(serviceRate.currency)
                )}
              </td>
              {/* <td>{truncate(serviceRate.currency)}</td> */}
              <td>
                <small>{truncate(serviceRate.unit)}</small>
              </td>
              <td className="text-right">{truncate(serviceRate.type)}</td>
              <td>
                {truncate(serviceRate.material)} <br />
                <small>{truncate(serviceRate.modifiers)}</small>
              </td>
              {/* <td>
                <small>{truncate(serviceRate.modifiers)}</small>
              </td> */}
              {/* <td>{truncate(serviceRate.description)}</td> */}
              {/* <td>{truncate(serviceRate.ownerId)}</td> */}
              {/* <td>{timeTag(serviceRate.createdAt)}</td> */}
              {/* <td>{timeTag(serviceRate.updatedAt)}</td> */}
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.serviceRate({ id: serviceRate.id })}
                    title={'Show serviceRate ' + serviceRate.id + ' detail'}
                    className="button small visually-hidden"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editServiceRate({ id: serviceRate.id })}
                    title={'Edit serviceRate ' + serviceRate.id}
                    className="button small secondary"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete serviceRate ' + serviceRate.id}
                    className="button small alert visually-hidden"
                    onClick={() => onDeleteClick(serviceRate.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="text-right">
        <button onClick={exportToJson} className="button tiny warning">
          Download All as JSON
        </button>
      </section>
    </div>
  )
}

export default ServiceRatesList
