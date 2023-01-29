import { useState, useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'

const UserDetailsPrint = () => {
  const { isAuthenticated, currentUser } = useAuth()

  const [ip, setIP] = useState('')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  const getGeoData = async () => {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()

    setIP(data.ip)
    setLat(data.latitude)
    setLong(data.longitude)
  }

  useEffect(() => {
    getGeoData()
  }, [])

  if (isAuthenticated && currentUser) {
    return (
      <>
        <pre>
          <ul>
            <li>
              <strong>Handle:</strong> {currentUser.handle}
            </li>
            <li>
              <strong>Email:</strong> {currentUser.email}
            </li>
            <li>
              <strong>Role:</strong>{' '}
              {currentUser.roles.charAt(0).toUpperCase() +
                currentUser.roles.slice(1)}
            </li>
            <li>
              <strong>My IP:</strong>
              {' ' + ip}
            </li>
            <li>
              <strong>GPS:</strong> {lat + ', ' + long} <br />
              <button onClick={getGeoData} className="button tiny warning">
                Update GPS
              </button>
              <a
                href={'https://www.google.com/maps/dir/' + lat + ',+' + long}
                className="button tiny secondary"
                target={'_blank'}
                rel="noreferrer"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </pre>
      </>
    )
  } else {
    return (
      <>
        <h6>No User Profile Found!</h6>
      </>
    )
  }
}

export default UserDetailsPrint
