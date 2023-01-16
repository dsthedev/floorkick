import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import LoginOrOutLink from 'src/components/LoginOrOutLink/LoginOrOutLink'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <section>
        {isAuthenticated ? (
          <Link className="button button-small button-blue" to={routes.notes()}>
            View Notes
          </Link>
        ) : (false)}

        <LoginOrOutLink />
      </section>
    </>
  )
}

export default HomePage
