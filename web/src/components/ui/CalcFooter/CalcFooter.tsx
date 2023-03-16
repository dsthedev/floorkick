import { Link, routes } from '@redwoodjs/router'

const CalcFooter = () => {
  return (
    <footer>
      <div className="columns">
        <div className="column">
          <nav className="buttons">
            <Link
              className="button is-small is-rounded"
              to={routes.calculators()}
            >
              Back to Calculators
            </Link>
            <Link className="button is-small is-rounded" to={routes.home()}>
              Return Home
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default CalcFooter
