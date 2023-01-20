import RealmCell from 'src/components/Realm/RealmCell'

type RealmPageProps = {
  id: number
}

const RealmPage = ({ id }: RealmPageProps) => {
  return <RealmCell id={id} />
}

export default RealmPage
