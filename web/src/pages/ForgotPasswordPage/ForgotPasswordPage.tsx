import { useEffect, useRef } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { username: string }) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <main className="main">
        <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />
        <div className="scaffold login-container">
          <div className="segment">
            <header className="segment-header">
              <h2 className="heading heading-secondary">
                Forgot Password
              </h2>
            </header>

            <div className="segment-main">
              <div className="form-wrapper">
                <Form onSubmit={onSubmit} className="form-wrapper">
                  <div className="text-left">
                    <Label
                      name="username"
                      className="label"
                      errorClassName="label label-error"
                    >
                      Username
                    </Label>
                    <TextField
                      name="username"
                      className="input"
                      errorClassName="input input-error"
                      ref={usernameRef}
                      validation={{
                        required: {
                          value: true,
                          message: 'Username is required',
                        },
                      }}
                    />

                    <FieldError name="username" className="field-error" />
                  </div>

                  <div className="button-group">
                    <Submit className="button button-blue">Submit</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ForgotPasswordPage
