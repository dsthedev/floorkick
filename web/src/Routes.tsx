import { Set, Router, Route } from '@redwoodjs/router'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />

      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
    </Router>
  )
}

export default Routes
