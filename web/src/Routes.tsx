import { Set, Router, Route } from '@redwoodjs/router'

// import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import DefaultLayout from 'src/layouts/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set private unauthenticated="home" roles={['developer', 'standard']} wrap={DefaultLayout} title="ServiceRates" titleTo="serviceRates" buttonLabel="New Rate" buttonTo="newServiceRate">
        <Route path="/service-rates/new" page={ServiceRateNewServiceRatePage} name="newServiceRate" />
        <Route path="/service-rates/{id:Int}/edit" page={ServiceRateEditServiceRatePage} name="editServiceRate" />
        <Route path="/service-rates/{id:Int}" page={ServiceRateServiceRatePage} name="serviceRate" />
        <Route path="/service-rates" page={ServiceRateServiceRatesPage} name="serviceRates" />
      </Set>
      <Set private unauthenticated="home" roles={['developer', 'standard']} wrap={DefaultLayout} title="Address" titleTo="realms" buttonLabel="New Address" buttonTo="newRealm">
        <Route path="/realms/new" page={RealmNewRealmPage} name="newRealm" />
        <Route path="/realms/{id:Int}/edit" page={RealmEditRealmPage} name="editRealm" />
        <Route path="/realms/{id:Int}" page={RealmRealmPage} name="realm" />
        <Route path="/realms" page={RealmRealmsPage} name="realms" />
      </Set>
      <Set private unauthenticated="home" roles={['developer', 'standard']} wrap={DefaultLayout} title="Notes" titleTo="notes" buttonLabel="New Note" buttonTo="newNote">
        <Route path="/notes/new" page={NoteNewNotePage} name="newNote" />
        <Route path="/notes/{id:Int}/edit" page={NoteEditNotePage} name="editNote" />
        <Route path="/notes/{id:Int}" page={NoteNotePage} name="note" />
        <Route path="/notes" page={NoteNotesPage} name="notes" />
      </Set>
      <Set private unauthenticated="home" roles={['developer']} wrap={DefaultLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>

      <Set wrap={DefaultLayout} title="Floorkick" titleTo="home" buttonLabel="Home" buttonTo="home">
        <Route path="/calculators" page={CalculatorsPage} name="calculators" />
        <Route path="/sandbox" page={SandboxPage} name="sandbox" />

        <Route path="/login" page={LoginPage} name="login" />
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
