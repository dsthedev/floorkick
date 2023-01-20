import EditRealmCell from 'src/components/Realm/EditRealmCell'

type RealmPageProps = {
  id: number
}

const EditRealmPage = ({ id }: RealmPageProps) => {
  return <EditRealmCell id={id} />
}

export default EditRealmPage
