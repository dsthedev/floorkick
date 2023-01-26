import { useEffect } from 'react'

import type {
  DeleteServiceRateMutationVariables,
  FindServiceRates,
} from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Core/ServiceRate/ServiceRatesPrint'
import DisplayCurrency from 'src/components/fn/DisplayCurrency/DisplayCurrency'
import { timeTag, truncate } from 'src/lib/formatters'

const ServiceRatesPrintList = ({ serviceRates }: FindServiceRates) => {
  const { currentUser } = useAuth()

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
            {currentUser ? currentUser.firstName + "'s " : ' My '}
            Rates
          </h2>
          <p className="input-group hide-for-print">
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

        <div className="cell" style={{ columns: '100px 2' }}>
          {' '}
          <table className="table compact unstack-for-medium hover">
            <tbody>
              {results.map((serviceRate) => (
                <tr key={serviceRate.id}>
                  <td>
                    {DisplayCurrency(truncate(serviceRate.value), 'USD')}
                    <small>
                      {' per ' + truncate(serviceRate.unit) + ' to '}
                    </small>
                    {truncate(serviceRate.task) +
                      ' ' +
                      truncate(serviceRate.material)}
                    {serviceRate.modifiers ? (
                      <>
                        <small>
                          {' [' + truncate(serviceRate.modifiers) + ']'}
                        </small>
                      </>
                    ) : (
                      false
                    )}
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

export default ServiceRatesPrintList
