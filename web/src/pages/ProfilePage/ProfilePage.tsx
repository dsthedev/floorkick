import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import UserDetailsPrint from 'src/components/fn/UserDetailsPrint/UserDetailsPrint'

const ProfilePage = () => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <div>
        <UserDetailsPrint />
      </div>
    </>
  )
}

export default ProfilePage
