import EditServiceRateCell from 'src/components/ServiceRate/EditServiceRateCell'

type ServiceRatePageProps = {
  id: number
}

const EditServiceRatePage = ({ id }: ServiceRatePageProps) => {
  return <EditServiceRateCell id={id} />
}

export default EditServiceRatePage
