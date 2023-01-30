import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const MainMenu = () => {
  const { isAuthenticated, hasRole } = useAuth()

  const [showMenuDropdown, setShowMenuDropdown] = useState(false)

  return (
    isAuthenticated && (
      <ul className="dropdown menu">
        <li
          className={
            'is-dropdown-submenu-parent opens-left' +
            (showMenuDropdown ? ' is-active' : '')
          }
        >
          <button
            className="menu-text"
            // onMouseEnter={() => setShowMenuDropdown(true)}
            // onMouseLeave={() => setShowMenuDropdown(false)}
            onClick={() =>
              showMenuDropdown
                ? setShowMenuDropdown(false)
                : setShowMenuDropdown(true)
            }
          >
            {showMenuDropdown ? 'Close' : 'Menu'}
          </button>
          <ul
            className={
              'menu submenu is-dropdown-submenu vertical' +
              (showMenuDropdown ? ' js-dropdown-active' : '')
            }
          >
            <li>
              <Link className="button large success" to={routes.serviceRates()}>
                Rates
              </Link>
            </li>
            <li>
              <Link
                className="button small secondary"
                to={routes.calculators()}
              >
                Calculators
              </Link>
            </li>
            <li>
              <Link
                className="button small hollow menu-text"
                to={routes.profile()}
              >
                Profile
              </Link>
            </li>
            {hasRole('developer') ? (
              <>
                <li>
                  <Link
                    className="button tiny hollow secondary"
                    to={routes.users()}
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    className="button tiny hollow warning"
                    to={routes.sandbox()}
                  >
                    Sandbox
                  </Link>
                </li>
              </>
            ) : (
              false
            )}
          </ul>
        </li>
      </ul>
    )
  )
}

export default MainMenu
