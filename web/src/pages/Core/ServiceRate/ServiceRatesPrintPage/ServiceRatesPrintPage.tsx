import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ServiceRatesPrintCell from 'src/components/Core/ServiceRate/ServiceRatesPrintCell/ServiceRatesPrintCell'

const ServiceRatesPrintPage = () => {
  return (
    <>
      <MetaTags title="Rates" description="Service rates display page." />

      <ServiceRatesPrintCell />
    </>
  )
}

export default ServiceRatesPrintPage
