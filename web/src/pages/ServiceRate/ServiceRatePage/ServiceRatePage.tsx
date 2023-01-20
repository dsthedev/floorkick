import ServiceRateCell from 'src/components/ServiceRate/ServiceRateCell'

type ServiceRatePageProps = {
  id: number
}

const ServiceRatePage = ({ id }: ServiceRatePageProps) => {
  return <ServiceRateCell id={id} />
}

export default ServiceRatePage
