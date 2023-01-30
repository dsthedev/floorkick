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

      <div className="scaffold">
        <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />

        <header className="grid-x hide-for-print">
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

          {isAuthenticated && !isHomePage ? (
            <nav className="cell shrink text-right">
              <Link to={routes[buttonTo]()} className="button small">
                {buttonLabel}
              </Link>
            </nav>
          ) : (
            false
          )}
          <nav className="cell shrink">
            <MainMenu />
          </nav>
        </header>

        {children}

        <footer id="footerbar" className="grid-x">
          {isAuthenticated ? (
            <>
              <div className="cell auto">
                <h5>
                  {'Hello, '}
                  {currentUser ? currentUser.firstName + '!' : ' Guest!'}
                </h5>
              </div>
              <div className="cell shrink text-right">
                &copy;{' '}
                <a
                  href="https://www.darrensopiarz.com/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  d11z
                </a>
              </div>
            </>
          ) : (
            false
          )}
        </footer>
      </div>
    </>
  )
}

export default Default
