import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CalculateRollLengthFromTotalYardage from 'src/components/fn/CalculateRollLengthFromTotalYardage/CalculateRollLengthFromTotalYardage'
import PlankIncrementor from 'src/components/fn/PlankIncrementor/PlankIncrementor'

const CalculatorsPage = () => {
  return (
    <>
      <MetaTags title="Calculators" description="Calculators page" />

      <header className="columns">
        <div className="column">
          <h1 className="title">Calculators</h1>
        </div>
      </header>

      <main className="columns is-multiline is-centered">
        <section className="column is-three-quarters">
          <div className="content">
            <PlankIncrementor></PlankIncrementor>
          </div>
        </section>
      </main>
      <hr />
      <aside className="columns is-multiline is-centered">
        <section className="column is-half">
          <div className="content">
            {/* <CalculateRollLengthFromTotalYardage></CalculateRollLengthFromTotalYardage> */}
          </div>
        </section>
      </aside>

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
