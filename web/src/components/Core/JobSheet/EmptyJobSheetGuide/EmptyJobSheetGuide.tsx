import { Link, routes } from '@redwoodjs/router'

const EmptyJobSheetGuide = () => {
  return (
    <div className="callout large alert text-center">
      <h2>{'No Job Sheets Found'}</h2>
      <p>It looks like you haven't created any job sheets yet.</p>
      <hr />
      <p className="lead">
        <Link to={routes.newJobSheet()} className="button large warning">
          {'Create Job Sheet'}
        </Link>
      </p>
      <p>
        <Link
          className="button small secondary hollow"
          to={routes.serviceRates()}
        >
          Review My Service Rates
        </Link>
      </p>
      <section className="visually-hidden">
        <h3>Import Job Sheets</h3>
        <p>
          If you have downloaded a JSON file exported before, you can upload it
          here to restore them.
        </p>
        <hr />
        <Link
          disabled
          to={routes.newJobSheet()}
          className="button small secondary"
        >
          {'Import Job Sheets'}
        </Link>
        <p>
          <small>
            This feature is currently in development and not ready yet. Please
            stay tuned for updates!
          </small>
        </p>
      </section>
    </div>
  )
}

export default EmptyJobSheetGuide
