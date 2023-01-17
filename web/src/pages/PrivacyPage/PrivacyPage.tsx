import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PrivacyPage = () => {
  return (
    <>
      <MetaTags title="Privacy" description="Privacy page" />

      <h1>Privacy Policy</h1>
      <h2>Public Viewers</h2>
      <p>No information about visitors to this site are kept or stored in any way.</p>
      <h2>Verified Users</h2>
      <p>For users that have an acccount that they log in with, the following information can be stored in the database (if provided):</p>
      <ul>
        <li>Username</li>
        <li>Email</li>
        <li>Salted and Hashed Password *</li>
      </ul>
      <p>At anytime, a user with an account can request that all their data be wiped by contacting the developer.</p>
    </>
  )
}

export default PrivacyPage
