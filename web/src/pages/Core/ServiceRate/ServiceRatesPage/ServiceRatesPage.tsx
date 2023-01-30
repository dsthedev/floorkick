import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ServiceRatesCell from 'src/components/Core/ServiceRate/ServiceRatesCell'

const ServiceRatesPage = () => {
  return (
    <>
      <MetaTags title="Rates" description="Service rates display page." />

      <ServiceRatesCell />

      <section>
        <p>
          <Link
            className="button large success expanded"
            to={routes.serviceRatesPrint()}
          >
            Printer Friendly Version
          </Link>
        </p>
      </section>
    </>
  )
}

export default ServiceRatesPage
