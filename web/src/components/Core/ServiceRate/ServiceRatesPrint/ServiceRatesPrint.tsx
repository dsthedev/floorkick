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
  const currentUser = useAuth()

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
      <div className="grid-x" style={{ width: '100%' }}>
        <header className="cell">
          <h1 className="h3">
            Rates <small>{currentUser ? currentUser.firstName : ' ?'}</small>
          </h1>
          <p className="input-group hide-for-print">
            <span className="input-group-label secondary">{'Filter'}</span>
            <span className="input-group-field">
              <input
                type="text"
                value={search}
                onChange={(e) => handleInput(e)}
                placeholder="Install, Carpet, Remove, Etc..."
              />
            </span>
          </p>
        </header>

        <div className="cell">
          {' '}
          <nav className="printlist callout" style={{ columns: 'auto 2' }}>
            <div className="menu vertical">
              {results.map((serviceRate) => (
                <div key={serviceRate.id} className="menu-item">
                  <h6>
                    <strong className="lead">
                      {DisplayCurrency(truncate(serviceRate.value), 'USD')}
                    </strong>
                    <small> per </small>
                    {truncate(serviceRate.unit)}
                    <span className="float-right">
                      {serviceRate.modifiers ? (
                        <>
                          <small>
                            {'[' + truncate(serviceRate.modifiers) + '] '}
                          </small>
                        </>
                      ) : (
                        false
                      )}
                      {truncate(serviceRate.task) +
                        ' ' +
                        truncate(serviceRate.material)}
                    </span>
                  </h6>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default ServiceRatesPrintList
