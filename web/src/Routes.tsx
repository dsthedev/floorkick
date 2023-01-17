import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />

      <Set wrap={ScaffoldLayout} title="Floorkick" titleTo="home" hideButtons>
        <Route path="/" page={HomePage} name="home" />

        <Route path="/login" page={LoginPage} name="login" />
        {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
        {/* <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" /> */}
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

        <Route path="/privacy" page={PrivacyPage} name="privacy" />

        <Route path="/sandbox" page={SandboxPage} name="sandbox" />
      </Set>

      <Set private unauthenticated="home" roles={['developer']} wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>

      <Set private unauthenticated="home" roles={['standard']} wrap={ScaffoldLayout} title="Notes" titleTo="notes" buttonLabel="New Note" buttonTo="newNote">
        <Route path="/notes/new" page={NoteNewNotePage} name="newNote" />
        <Route path="/notes/{id:Int}/edit" page={NoteEditNotePage} name="editNote" />
        <Route path="/notes/{id:Int}" page={NoteNotePage} name="note" />
        <Route path="/notes" page={NoteNotesPage} name="notes" />
      </Set>
    </Router>
  )
}

export default Routes
