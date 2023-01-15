import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const LoginOrOutLink = () => {
  const { isAuthenticated, logOut } = useAuth()

  let linkHTML = {}

  if (isAuthenticated) {
    linkHTML = (
      <Link
        className="button button-small button-red"
        to={routes.home()}
        onClick={logOut}
      >
        Logout
      </Link>
    )
  } else {
    linkHTML = (
      <Link className="button button-small button-green" to={routes.login()}>
        Login
      </Link>
    )
  }

  return <>{linkHTML}</>
}

export default LoginOrOutLink
