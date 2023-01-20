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
              <div className="grid-x">
                <div className="cell">
                  <Link
                    className="button success large expanded"
                    to={routes.serviceRates()}
                  >
                    Rates
                  </Link>
                </div>
                <div className="cell small-6">
                  <Link
                    className="button small hollow expanded"
                    to={routes.notes()}
                  >
                    Notes
                  </Link>
                </div>
                <div className="cell small-6">
                  <Link
                    className="button small secondary expanded"
                    to={routes.calculators()}
                  >
                    Calculators
                  </Link>
                </div>
                {hasRole('developer') ? (
                  <>
                    <div className="cell small-6">
                      <Link
                        className="button tiny warning expanded"
                        to={routes.users()}
                      >
                        Users
                      </Link>
                    </div>
                    <div className="cell small-6">
                      <Link
                        className="button tiny hollow expanded"
                        to={routes.realms()}
                      >
                        Realms
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
