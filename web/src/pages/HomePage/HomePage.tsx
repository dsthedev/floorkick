import { useEffect, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import GetWeekNumber from 'src/components/fn/GetWeekNumber/GetWeekNumber'
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

      <div className="box login">
        {isAuthenticated ? (
          <>
            <header className="has-text-centered">
              <h2 className="h4">{greeting}</h2>
              <p className="title">{time}</p>
              <h5 className="subtitle">
                {date}
                <small> | Week {GetWeekNumber(new Date())}</small>
              </h5>
            </header>

            <main>
              <hr />
              <nav className="buttons">
                <Link
                  className="button is-large is-primary is-light is-fullwidth"
                  to={routes.jobSheets()}
                >
                  Jobs
                </Link>
                <Link
                  className="button is-large is-warning is-light is-fullwidth"
                  to={routes.serviceRates()}
                >
                  Rates
                </Link>
              </nav>
              <hr />
            </main>
          </>
        ) : (
          <>
            <header className="has-text-centered">
              <h1 className="title">
                <Link to={routes.home()}>{'Floorkick'}</Link>
              </h1>
              <p className="subtitle">
                {"A flooring installer's digital sidekick."}
              </p>
            </header>

            <main className="has-text-centered">
              <hr />
              <LoginOrOutLink
                loggedInClass={'button is-large is-warning is-responsive'}
                loggedOutClass={'button is-large is-primary is-responsive'}
              />
              <hr />
            </main>
          </>
        )}
        <footer className="has-text-centered">
          {isAuthenticated ? (
            <>
              <LoginOrOutLink
                loggedInClass={'button is-small is-danger is-light'}
                loggedOutClass={'button is-small is-primary is-light'}
              />
            </>
          ) : (
            false
          )}
          <h6>
            <small>
              &copy;{' '}
              <a
                href="https://www.darrensopiarz.com/"
                target={'_blank'}
                rel="noreferrer"
              >
                d11z
              </a>
            </small>
          </h6>
        </footer>
      </div>
    </>
  )
}

export default HomePage
