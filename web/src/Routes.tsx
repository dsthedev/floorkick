import { Set, Router, Route } from '@redwoodjs/router'

import DefaultLayout from 'src/layouts/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set unauthenticated="home" roles={['developer', 'installer']} wrap={DefaultLayout} title="Rates" titleTo="serviceRates" buttonLabel="New Rate" buttonTo="newServiceRate">
        <Route path="/rates/new" page={CoreServiceRateNewServiceRatePage} name="newServiceRate" />
        <Route path="/rates/{id:Int}/edit" page={CoreServiceRateEditServiceRatePage} name="editServiceRate" />
        <Route path="/rates/{id:Int}" page={CoreServiceRateServiceRatePage} name="serviceRate" />
        <Route path="/rates" page={CoreServiceRateServiceRatesPage} name="serviceRates" />
      </Set>
      <Set unauthenticated="home" roles={['developer']} wrap={DefaultLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={DefaultLayout} title="Floorkick" titleTo="home" buttonLabel="Home" buttonTo="home">
        <Route path="/calculators" page={CalculatorsPage} name="calculators" />
        <Route path="/sandbox" page={SandboxPage} name="sandbox" />

        <Route path="/login" page={CoreLoginPage} name="login" />
        {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
        {/* <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" /> */}
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

        <Route path="/privacy" page={PrivacyPage} name="privacy" />

        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
