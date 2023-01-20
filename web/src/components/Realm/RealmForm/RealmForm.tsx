import type { EditRealmById, UpdateRealmInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormRealm = NonNullable<EditRealmById['realm']>

interface RealmFormProps {
  realm?: EditRealmById['realm']
  onSave: (data: UpdateRealmInput, id?: FormRealm['id']) => void
  error: RWGqlError
  loading: boolean
}

const RealmForm = (props: RealmFormProps) => {
  const { currentUser } = useAuth()

  const onSubmit = (data: FormRealm) => {
    props.onSave(data, props?.realm?.id)
  }

  return (
    <div className="form-wrapper">
      <Form<FormRealm> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="form-error-wrapper"
          titleClassName="form-error-title"
          listClassName="form-error-list"
        />

        <Label
          name="title"
          className="label"
          errorClassName="label label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.realm?.title}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="form-error" />

        <Label
          name="address"
          className="label"
          errorClassName="label label-error"
        >
          Address
        </Label>

        <TextField
          name="address"
          defaultValue={props.realm?.address}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="address" className="form-error" />

        <Label name="city" className="label" errorClassName="label label-error">
          City
        </Label>

        <TextField
          name="city"
          defaultValue={props.realm?.city}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="city" className="form-error" />

        <Label
          name="state"
          className="label"
          errorClassName="label label-error"
        >
          State
        </Label>

        <TextField
          name="state"
          defaultValue={props.realm?.state}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="state" className="form-error" />

        <Label name="zip" className="label" errorClassName="label label-error">
          Zip
        </Label>

        <NumberField
          name="zip"
          defaultValue={props.realm?.zip}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="zip" className="form-error" />

        <Label name="lat" className="label" errorClassName="label label-error">
          Lat
        </Label>

        <TextField
          name="lat"
          defaultValue={props.realm?.lat}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="lat" className="form-error" />

        <Label name="long" className="label" errorClassName="label label-error">
          Long
        </Label>

        <TextField
          name="long"
          defaultValue={props.realm?.long}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="long" className="form-error" />

        <Label
          name="ownerId"
          className="label visually-hidden"
          errorClassName="label label-error"
        >
          Owner id
        </Label>

        <NumberField
          name="ownerId"
          defaultValue={props.realm ? props.realm.ownerId : currentUser.id}
          className="input visually-hidden"
          errorClassName="input input-error"
        />

        <FieldError name="ownerId" className="form-error" />

        <div className="buttongroup">
          <Submit disabled={props.loading} className="button secondary">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RealmForm
