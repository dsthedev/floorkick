import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes, useMatch } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import LoginOrOutLink from 'src/components/fn/LoginOrOutLink/LoginOrOutLink'

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

        <header className="grid-x">
          <nav
            aria-label="You are here:"
            role="navigation"
            className="cell shrink"
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
            <nav className="cell auto text-right">
              <Link to={routes[buttonTo]()} className="button success">
                {buttonLabel + ' +'}
              </Link>
            </nav>
          ) : (
            false
          )}
        </header>

        {children}

        <footer className="grid-x">
          {isAuthenticated ? (
            <>
              <nav className="cell">
                <ul className="menu horizontal">
                  <li className="menu-text">
                    {currentUser ? currentUser.name : ' Guest'}
                  </li>
                  <li className="menu-item">
                    <LoginOrOutLink loggedInClass={''} loggedOutClass={''} />
                  </li>
                </ul>
              </nav>
              <div className="cell text-right">
                &copy; <a href="https://www.darrensopiarz.com/">d11z</a>
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
