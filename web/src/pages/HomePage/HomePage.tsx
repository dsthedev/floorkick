import { useEffect, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LoginOrOutLink from 'src/components/fn/LoginOrOutLink/LoginOrOutLink'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  const locale = 'en'
  const [today, setDate] = useState(new Date()) // Save the current date to be able to trigger an update

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 60 * 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const day = today.toLocaleDateString(locale, { weekday: 'short' })
  const date =
    day +
    ', ' +
    today.toLocaleDateString(locale, { month: 'short' }) +
    ' ' +
    today.getDate()

  const hour = today.getHours()

  const greeting =
    'Good ' +
    ((hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening') +
    ', ' +
    (currentUser ? currentUser.firstName : 'Guest')

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  })

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main className="text-center">
        {isAuthenticated ? (
          <>
            <header>
              <h2 className="h4">{greeting}</h2>
              <p className="h3 callout small">{time}</p>
              <p className="h2 callout small">{date}</p>
            </header>

            <nav className="callout">
              <div className="grid-x grid-margin-y">
                <div className="cell">
                  <ul className="menu vertical">
                    <li>
                      <Link
                        className="button success large"
                        to={routes.serviceRates()}
                      >
                        Rates
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="button secondary"
                        to={routes.calculators()}
                      >
                        Calculators
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="button hollow menu-text"
                        to={routes.profile()}
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <br />
                      <Link className="text-center" to={routes.privacy()}>
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
        ) : (
          <>
            <h2>Welcome to Floorkick!</h2>
            <LoginOrOutLink
              loggedInClass={'button large alert'}
              loggedOutClass={'button large secondary'}
            />
          </>
        )}
      </main>
    </>
  )
}

export default HomePage
