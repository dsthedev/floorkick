import type { CreateRealmInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RealmForm from 'src/components/Realm/RealmForm'

const CREATE_REALM_MUTATION = gql`
  mutation CreateRealmMutation($input: CreateRealmInput!) {
    createRealm(input: $input) {
      id
    }
  }
`

const NewRealm = () => {
  const [createRealm, { loading, error }] = useMutation(CREATE_REALM_MUTATION, {
    onCompleted: () => {
      toast.success('Realm created')
      navigate(routes.realms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateRealmInput) => {
    createRealm({ variables: { input } })
  }

  return (
    <div className="segment">
      <header className="segment-header">
        <h2 className="heading heading-secondary">New Realm</h2>
      </header>
      <div className="segment-main">
        <RealmForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRealm
