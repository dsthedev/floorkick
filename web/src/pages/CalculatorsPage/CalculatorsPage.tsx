import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CalculatorsPage = () => {
  return (
    <>
      <MetaTags title="Calculators" description="Calculators page" />

      <header className="has-text-centered">
        <div className="columns">
          <div className="column">
            <h1 className="title">Calculators</h1>
          </div>
        </div>
      </header>

      <main className="has-text-centered">
        <div className="columns is-multiline is-centered">
          <section className="column is-three-quarters">
            <div className="content">
              <p className="menu-list">
                <Link
                  className="button is-link mx-6 mb-5 is-medium"
                  to={routes.plankincrementor()}
                >
                  Plank Incrementor
                </Link>
                <Link
                  className="button is-info mx-6 mb-5 is-medium isnt-static"
                  to={routes.isitadrop()}
                >
                  Is it a Drop?
                </Link>
                <Link
                  className="button is-black mx-6 mb-5 is-medium"
                  to={routes.totalyardtorolllength()}
                >
                  Total Yard to Roll Length
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="has-text-centered">
        <div className="columns">
          <div className="column">
            <nav className="menu">
              <Link className="button is-outline is-rounded" to={routes.home()}>
                Return Home
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

export default CalculatorsPage
