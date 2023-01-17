import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LoginOrOutLink from 'src/components/LoginOrOutLink/LoginOrOutLink'

const HomePage = () => {
  const { isAuthenticated, hasRole } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <section>
        {isAuthenticated ? (
          <>
            <Link className="button button-blue" to={routes.notes()}>
              View Notes
            </Link>

            <hr />

            <Link
              className="button button-small button-green"
              to={routes.sandbox()}
            >
              Sandbox
            </Link>
          </>
        ) : (
          false
        )}

        {hasRole('developer') ? (
          <>
            <hr />
            <Link className="button" to={routes.users()}>
              Users
            </Link>
          </>
        ) : (
          false
        )}

        <hr />
        <LoginOrOutLink />
      </section>
    </>
  )
}

export default HomePage
