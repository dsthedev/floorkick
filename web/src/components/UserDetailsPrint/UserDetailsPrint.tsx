import { useAuth } from '@redwoodjs/auth'

const UserDetailsPrint = () => {
  const { isAuthenticated, currentUser } = useAuth()

  let detailsHTML = {}

  if (isAuthenticated) {
    detailsHTML = (
      <>
        <h6>User Details:</h6>
        <pre>
          <ul>
            <li>
              <strong>Name:</strong> {currentUser.name}
            </li>
            <li>
              <strong>Email:</strong> {currentUser.email}
            </li>
            <li>
              <strong>Role:</strong>{' '}
              {currentUser.roles.charAt(0).toUpperCase() +
                currentUser.roles.slice(1)}
            </li>
          </ul>
        </pre>
      </>
    )
  } else {
    detailsHTML = ''
  }

  return <>{detailsHTML}</>
}

export default UserDetailsPrint
