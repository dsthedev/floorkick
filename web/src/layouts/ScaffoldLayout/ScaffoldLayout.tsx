import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import DefaultLayout from '../DefaultLayout/DefaultLayout'
import LoginOrOutLink from 'src/components/LoginOrOutLink/LoginOrOutLink'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  isHome: boolean
  children: React.ReactNode
}

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  hideButtons,
  children,
}: LayoutProps) => {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <DefaultLayout>
      <main>
        <div className="scaffold">
          <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />
          <header className="header">
            <h1 className="heading heading-primary text-left">
              <Link to={routes[titleTo]()} className="link">
                {title}
              </Link>
            </h1>
            {(hideButtons) ? false : (
              <Link
                to={routes[buttonTo]()}
                className="button button-green text-right"
              >
                <div className="button-icon">+</div> {buttonLabel}
              </Link>
            )}
          </header>

          <section className="main">{children}</section>

          {isAuthenticated ? (
            <section>
              <hr />
              <p className="text-center">
                <small>
                  {'Thanks for checking out Floorkick, ' +
                    currentUser.name +
                    '!'}
                </small>
              </p>
              <hr />
            </section>
          ) : false}

          {(hideButtons) ? false : (
            <>
              <footer>
                <span className="float-left">
                  <Link className="button button-orange" to={routes.home()}>
                    Return Home
                  </Link>
                </span>
                <span className="float-right">
                  <LoginOrOutLink />
                </span>
              </footer>
            </>
          )}
        </div>
      </main>
    </DefaultLayout >
  )
}

export default ScaffoldLayout
