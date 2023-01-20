import type { EditRealmById, UpdateRealmInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RealmForm from 'src/components/Realm/RealmForm'

export const QUERY = gql`
  query EditRealmById($id: Int!) {
    realm: realm(id: $id) {
      id
      title
      address
      city
      state
      zip
      lat
      long
      ownerId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_REALM_MUTATION = gql`
  mutation UpdateRealmMutation($id: Int!, $input: UpdateRealmInput!) {
    updateRealm(id: $id, input: $input) {
      id
      title
      address
      city
      state
      zip
      lat
      long
      ownerId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ realm }: CellSuccessProps<EditRealmById>) => {
  const [updateRealm, { loading, error }] = useMutation(UPDATE_REALM_MUTATION, {
    onCompleted: () => {
      toast.success('Realm updated')
      navigate(routes.realms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateRealmInput,
    id: EditRealmById['realm']['id']
  ) => {
    updateRealm({ variables: { id, input } })
  }

  return (
    <div className="segment">
      <header className="segment-header">
        <h2 className="heading heading-secondary">{realm?.title}</h2>
      </header>
      <div className="segment-main">
        <RealmForm
          realm={realm}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
