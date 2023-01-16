import { useRef } from 'react'
import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({ username: data.username, password: data.password })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <section>
        <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />
        <div className="scaffold login-container">
          <div className="segment">
            <header className="segment-header">
              {/* <h2 className="heading heading-secondary">Log in</h2> */}
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

                  {/* <div className="forgot-link">
                    <Link
                      to={routes.forgotPassword()}
                      className="forgot-link"
                    >
                      Forgot Password?
                    </Link>
                  </div> */}

                  <FieldError name="password" className="field-error" />

                  <div className="button-group">
                    <Submit className="button button-blue">Login</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage
