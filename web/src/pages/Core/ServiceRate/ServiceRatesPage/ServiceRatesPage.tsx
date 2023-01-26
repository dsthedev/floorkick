import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ServiceRatesCell from 'src/components/Core/ServiceRate/ServiceRatesCell'

const ServiceRatesPage = () => {
  return (
    <>
      <MetaTags title="Rates" description="Service rates display page." />

      <ServiceRatesCell />

      <Link to={routes.serviceRatesPrint()}>View for Printing</Link>
    </>
  )
}

export default ServiceRatesPage
