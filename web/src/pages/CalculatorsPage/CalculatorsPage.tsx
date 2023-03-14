import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CalculateRollLengthFromTotalYardage from 'src/components/fn/CalculateRollLengthFromTotalYardage/CalculateRollLengthFromTotalYardage'

const CalculatorsPage = () => {
  return (
    <>
      <MetaTags title="Calculators" description="Calculators page" />

      <header className="columns">
        <div className="column">
          <h1 className="title">Calculators</h1>
        </div>
      </header>

      <main className="columns">
        <section className="column">
          <CalculateRollLengthFromTotalYardage></CalculateRollLengthFromTotalYardage>
        </section>
      </main>

      <footer className="columns">
        <div className="column">
          <nav className="menu">
            <ul>
              <li>
                <Link to={routes.home()}>Return Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default CalculatorsPage
