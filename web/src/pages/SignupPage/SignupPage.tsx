import { useRef } from 'react'
import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({ username: data.username, password: data.password })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <section>
        <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />
        <div className="scaffold login-container">
          <div className="segment">
            <header className="segment-header">
              <h2 className="heading heading-secondary">Signup</h2>
            </header>

            <div className="segment-main">
              <div className="form-wrapper">
                <Form onSubmit={onSubmit} className="form-wrapper">
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

                  <Label
                    name="password"
                    className="label"
                    errorClassName="label label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="input"
                    errorClassName="input input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="field-error" />

                  <div className="button-group">
                    <Submit className="button button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="button">
              Log in!
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignupPage
