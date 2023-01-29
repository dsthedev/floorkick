import { useState, useEffect } from 'react'

import geolocation from 'geolocation'

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

    geolocation.getCurrentPosition(function (err, position) {
      if (err) throw err

      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
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
              <strong>GPS:</strong> {lat + ', ' + long}
              <br />
              <br />
              <button onClick={getGeoData} className="button tiny warning">
                Update GPS
              </button>{' '}
              <a
                href={
                  'https://www.google.com/maps/search/?api=1&query=' +
                  lat +
                  '%2C' +
                  long +
                  '&zoom=10'
                }
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
