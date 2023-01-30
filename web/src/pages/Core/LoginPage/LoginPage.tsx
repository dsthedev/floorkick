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
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

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

      <main className="main text-center">
        <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />
        <div className="scaffold login-container">
          <div className="segment">
            <header className="segment-header">
              <h1 className="callout small primary">
                Floorkick
                <br />
              </h1>
              <p>
                <small>Login</small>
              </p>
            </header>

            <div className="segment-main">
              <div className="form-wrapper">
                <Form onSubmit={onSubmit} className="form">
                  <Label
                    name="username"
                    className="is-label"
                    errorClassName="is-invalid-label"
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

                  <FieldError
                    name="username"
                    className="form-error is-visible"
                  />

                  <Label
                    name="password"
                    className="is-label"
                    errorClassName="is-invalid-label"
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

                  <FieldError
                    name="password"
                    className="form-error is-visible"
                  />

                  <div className="button-group">
                    <Submit className="button large expanded">Login</Submit>
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

export default LoginPage
