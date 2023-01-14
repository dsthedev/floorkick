import { MetaTags } from '@redwoodjs/web'

import LoginOrOutLink from 'src/components/LoginOrOutLink/LoginOrOutLink'
import UserDetailsPrint from 'src/components/UserDetailsPrint/UserDetailsPrint'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>
        <h1>Floorkick</h1>
        <br />
        <UserDetailsPrint />
        <br />
        <LoginOrOutLink />
      </main>
    </>
  )
}

export default HomePage
