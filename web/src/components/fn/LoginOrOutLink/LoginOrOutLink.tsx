import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const LoginOrOutLink = ({ loggedInClass, loggedOutClass }) => {
  const { isAuthenticated, logOut } = useAuth()

  let linkHTML = {}

  if (isAuthenticated) {
    linkHTML = (
      <Link className={loggedInClass} to={routes.home()} onClick={logOut}>
        Logout
      </Link>
    )
  } else {
    linkHTML = (
      <Link className={loggedOutClass} to={routes.login()}>
        Login
      </Link>
    )
  }

  return <>{linkHTML}</>
}

export default LoginOrOutLink
