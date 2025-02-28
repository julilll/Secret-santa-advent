import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <PrivateSet unauthenticated="login">
        <Set wrap={AuthLayout}>
          <Route path="/event/new" page={NewEventPage} name="newEvent" />
        </Set>
        <Set wrap={InteriorLayout}>
          <Route path="/event/{id:String}" page={GroupInvitePage} name="groupInvite" />
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
      </PrivateSet>
      <Set wrap={AuthLayout}>
        <Route path="/accept" page={AcceptPage} name="accept" />
        <Route path="/decline" page={DeclinePage} name="decline" />
        <Route path="/rsvp" page={RsvpPage} name="rsvp" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
