import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LoginOrOutLink from 'src/components/fn/LoginOrOutLink/LoginOrOutLink'

const HomePage = () => {
  const { isAuthenticated, hasRole } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main className="grid-y grid-padding-x">
        {isAuthenticated ? (
          <>
            <nav>
              <div className="grid-x grid-margin-y">
                <div className="cell">
                  <Link
                    className="button success large expanded"
                    to={routes.serviceRates()}
                  >
                    Rates
                  </Link>
                </div>
                <div className="cell">
                  <Link
                    className="button small secondary"
                    to={routes.calculators()}
                  >
                    Calculators
                  </Link>
                </div>
                {hasRole('developer') ? (
                  <>
                    <div className="cell small-6">
                      <Link
                        className="button tiny alert expanded"
                        to={routes.users()}
                      >
                        Users
                      </Link>
                    </div>
                  </>
                ) : (
                  false
                )}
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
