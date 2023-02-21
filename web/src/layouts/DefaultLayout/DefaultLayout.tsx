import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes, useMatch } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import LoginOrOutLink from 'src/components/fn/LoginOrOutLink/LoginOrOutLink'
import MainMenu from 'src/components/fn/MainMenu/MainMenu'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  hideButtons: boolean
  children: React.ReactNode
}

const Default = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: LayoutProps) => {
  const { isAuthenticated, currentUser } = useAuth()
  const [isHomePage, setIsHomePage] = useState(useMatch(routes.home()).match)

  return (
    <>
      <div
        id="svgbg"
        className={'flooring' + (isAuthenticated ? ' zoomed' : '')}
      ></div>
      <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />

      <div className="container">
        <div className="section">
          <div className="box">
            <header className="hide-for-print columns">
              {isAuthenticated ? (
                <>
                  <nav
                    aria-label="breadcrumbs"
                    role="navigation"
                    className="breadcrumb column"
                  >
                    <ul>
                      <li>
                        <Link to={routes.home()}>Floorkick</Link>
                      </li>
                      {isAuthenticated && !isHomePage ? (
                        <>
                          <li>
                            <Link to={routes[titleTo]()}>{title}</Link>
                          </li>
                        </>
                      ) : (
                        false
                      )}
                    </ul>
                  </nav>
                  <nav className="column has-text-right">
                    <ul>
                      <Link
                        className="button is-small is-success"
                        to={routes[buttonTo]()}
                      >
                        {buttonLabel}
                      </Link>
                    </ul>
                  </nav>
                  <hr />
                </>
              ) : (
                false
              )}
            </header>

            {children}

            <footer id="footerbar" className="hide-for-print">
              {isAuthenticated ? (
                <>
                  <div>
                    <hr />
                    <LoginOrOutLink
                      loggedInClass={'button small alert'}
                      loggedOutClass={'button small secondary'}
                    />
                  </div>
                </>
              ) : (
                false
              )}
              <div>
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
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Default
