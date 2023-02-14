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

      <div className="section">
        <div className="container">
          <div className="box">
            <header className="hide-for-print">
              {isAuthenticated ? (
                <>
                  <nav
                    aria-label="You are here:"
                    role="navigation"
                    className="cell auto"
                  >
                    <ul className="breadcrumbs">
                      <li>
                        <Link to={routes.home()}>Floorkick</Link>
                      </li>
                      {isAuthenticated && !isHomePage ? (
                        <>
                          <li>
                            <span className="show-for-sr">Current: </span>
                            <Link to={routes[titleTo]()}>{title}</Link>
                          </li>
                        </>
                      ) : (
                        false
                      )}
                    </ul>
                  </nav>

                  <nav className="cell shrink text-right">
                    <Link to={routes[buttonTo]()} className="button small">
                      {buttonLabel}
                    </Link>
                  </nav>
                </>
              ) : (
                false
              )}
              <nav className="cell shrink">
                <MainMenu />
              </nav>
            </header>

            {children}

            <footer
              id="footerbar"
              className="grid-x text-center hide-for-print"
            >
              {isAuthenticated ? (
                <>
                  <div className="cell">
                    <small>
                      Thanks for checking out Floorkick{', '}
                      {currentUser ? currentUser.firstName : ' Guest'}!
                    </small>
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
              <div className="cell">
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
