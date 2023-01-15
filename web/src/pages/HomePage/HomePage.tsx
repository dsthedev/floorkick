import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LoginOrOutLink from 'src/components/LoginOrOutLink/LoginOrOutLink'
import UserDetailsPrint from 'src/components/UserDetailsPrint/UserDetailsPrint'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>
        <h1>Floorkick</h1>
        <br />
        <UserDetailsPrint />
        <br />
        {isAuthenticated ? (
          <Link className="button button-small button-blue" to={routes.notes()}>
            View Notes
          </Link>
        ) : (
          false
        )}
        <br />
        <LoginOrOutLink />
      </main>
    </>
  )
}

export default HomePage
