import { Set, Router, Route } from '@redwoodjs/router'

import DefaultLayout from 'src/layouts/DefaultLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import SimpleLayout from './layouts/SimpleLayout/SimpleLayout'

const Routes = () => {
  return (
    <Router>
      <Set unauthenticated="home" roles={['developer', 'installer']} wrap={DefaultLayout} title="Job Sheets" titleTo="jobSheets" buttonLabel="New Job Sheet" buttonTo="newJobSheet">
        <Route path="/job-sheets/new" page={CoreJobSheetNewJobSheetPage} name="newJobSheet" />
        <Route path="/job-sheets/{id:Int}/edit" page={CoreJobSheetEditJobSheetPage} name="editJobSheet" />
        <Route path="/job-sheets/{id:Int}" page={CoreJobSheetJobSheetPage} name="jobSheet" />
        <Route path="/job-sheets" page={CoreJobSheetJobSheetsPage} name="jobSheets" />
      </Set>

      <Set unauthenticated="home" roles={['developer', 'installer']} wrap={DefaultLayout} title="Rates" titleTo="serviceRates" buttonLabel="New Rate" buttonTo="newServiceRate">
        <Route path="/rates/new" page={CoreServiceRateNewServiceRatePage} name="newServiceRate" />
        <Route path="/rates/{id:Int}/edit" page={CoreServiceRateEditServiceRatePage} name="editServiceRate" />
        <Route path="/rates/{id:Int}" page={CoreServiceRateServiceRatePage} name="serviceRate" />
        <Route path="/rates" page={CoreServiceRateServiceRatesPage} name="serviceRates" />
        <Route path="/print/rates" page={CoreServiceRateServiceRatesPrintPage} name="serviceRatesPrint" />
      </Set>

      <Set unauthenticated="home" roles={['developer']} wrap={DefaultLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>

      <Set wrap={DefaultLayout} title="Floorkick" titleTo="home" buttonLabel="Home" buttonTo="home">
        <Route path="/sandbox" page={SandboxPage} name="sandbox" />

        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route path="/resources" page={ResourcesPage} name="resources" />
        <Route path="/calculators" page={CalculatorsPage} name="calculators" />

        {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
        {/* <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" /> */}
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

        <Route path="/privacy" page={PrivacyPage} name="privacy" />
      </Set>

      <Set wrap={SimpleLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={CoreLoginPage} name="login" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
