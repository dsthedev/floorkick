import { useEffect } from 'react'

import type {
  DeleteServiceRateMutationVariables,
  FindServiceRates,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Core/ServiceRate/ServiceRatesCell'
import DisplayCurrency from 'src/components/fn/DisplayCurrency/DisplayCurrency'
import { timeTag, truncate } from 'src/lib/formatters'

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

  useEffect(() => {
    let searchResults

    if (search) {
      searchResults = serviceRates.filter((item) => {
        const checkAgainstThis =
          item.unit +
          item.task +
          item.material +
          item.modifiers +
          item.description
        console.log(checkAgainstThis)
        return checkAgainstThis.toLowerCase().includes(search.toLowerCase())
      })
    } else {
      searchResults = serviceRates
    }
    setResults(searchResults)
  }, [search, serviceRates])

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="grid-x">
        <header className="cell">
          <h2>
            My Rates{' '}
            <small>
              <code>
                {results.length > 0 ? '[' + results.length + ']' : false}
              </code>
            </small>
          </h2>
          <p className="input-group">
            <span className="input-group-label secondary">{'Filter'}</span>
            <span className="input-group-field">
              <input
                type="text"
                value={search}
                onChange={(e) => handleInput(e)}
                placeholder="Carpet, LVT, Trim..."
              />
            </span>
          </p>
        </header>

        <div className="cell">
          {' '}
          <table className="table unstack-for-medium hover">
            <thead>
              <tr>
                <th className="text-right">Cost</th>
                <th>Task</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {results.map((serviceRate) => (
                <tr key={serviceRate.id}>
                  <td className="text-right">
                    {DisplayCurrency(truncate(serviceRate.value), 'USD')}
                    <br />
                    <small>{' per ' + truncate(serviceRate.unit)}</small>
                  </td>
                  <td>
                    {truncate(serviceRate.task) +
                      ' ' +
                      truncate(serviceRate.material)}
                    {serviceRate.modifiers ? (
                      <>
                        <br />
                        <small>
                          {' [' + truncate(serviceRate.modifiers) + ']'}
                        </small>
                      </>
                    ) : (
                      false
                    )}
                  </td>
                  <td>
                    <nav>
                      <Link
                        to={routes.editServiceRate({ id: serviceRate.id })}
                        title={'Edit serviceRate ' + serviceRate.id}
                        className="button secondary"
                      >
                        Edit
                      </Link>
                    </nav>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ServiceRatesList
