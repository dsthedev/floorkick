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

      <div className="box login">
        <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />
        <header className="has-text-centered">
          <h1 className="title">
            <Link to={routes.home()}>{'Floorkick'}</Link>
          </h1>
          <p className="subtitle">{'Login'}</p>
        </header>

        <main>
          <hr />
          <Form onSubmit={onSubmit} className="form">
            <div className="field">
              <Label
                name="username"
                className="label h4"
                errorClassName="label is-danger"
              >
                Username
              </Label>

              <div className="control">
                <TextField
                  name="username"
                  className="input"
                  placeholder="Username"
                  errorClassName="input is-danger"
                  ref={usernameRef}
                  validation={{
                    required: {
                      value: true,
                      message: 'Username is required',
                    },
                  }}
                />
              </div>

              <FieldError name="username" className="is-danger" />
            </div>

            <div className="field">
              <Label
                name="password"
                className="label h4"
                errorClassName="label is-danger"
              >
                Passphrase
              </Label>
              <div className="control">
                <PasswordField
                  name="password"
                  className="input"
                  placeholder="************************"
                  errorClassName="input is-danger"
                  autoComplete="current-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                />
              </div>
              <FieldError name="password" className="is-danger" />
            </div>

            <Submit className="button is-primary is-large is-fullwidth">
              Login
            </Submit>
          </Form>
          <hr />
        </main>

        <footer className="has-text-centered">
          <h6>
            <small>
              &copy;{' '}
              <a
                href="https://www.darrensopiarz.com/"
                target={'_blank'}
                rel="noreferrer"
              >
                d11z
              </a>
            </small>
          </h6>
        </footer>
      </div>
    </>
  )
}

export default LoginPage
