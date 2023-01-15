import type { EditUserById, UpdateUserInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormUser = NonNullable<EditUserById['user']>

interface UserFormProps {
  user?: EditUserById['user']
  onSave: (data: UpdateUserInput, id?: FormUser['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserForm = (props: UserFormProps) => {
  const onSubmit = (data: FormUser) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="form-wrapper">
      <Form<FormUser> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="form-error-wrapper"
          titleClassName="form-error-title"
          listClassName="form-error-list"
        />

        <Label
          name="email"
          className="label"
          errorClassName="label label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="field-error" />

        <Label
          name="hashedPassword"
          className="label"
          errorClassName="label label-error"
        >
          Hashed password
        </Label>

        <TextField
          name="hashedPassword"
          defaultValue={props.user?.hashedPassword}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="hashedPassword" className="field-error" />

        <Label name="salt" className="label" errorClassName="label label-error">
          Salt
        </Label>

        <TextField
          name="salt"
          defaultValue={props.user?.salt}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="salt" className="field-error" />

        <Label
          name="resetToken"
          className="label"
          errorClassName="label label-error"
        >
          Reset token
        </Label>

        <TextField
          name="resetToken"
          defaultValue={props.user?.resetToken}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="resetToken" className="field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="label"
          errorClassName="label label-error"
        >
          Reset token expires at
        </Label>

        <DatetimeLocalField
          name="resetTokenExpiresAt"
          defaultValue={formatDatetime(props.user?.resetTokenExpiresAt)}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="resetTokenExpiresAt" className="field-error" />

        <Label name="name" className="label" errorClassName="label label-error">
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.user?.name}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="field-error" />

        <Label
          name="roles"
          className="label"
          errorClassName="label label-error"
        >
          Roles
        </Label>

        <TextField
          name="roles"
          defaultValue={props.user?.roles}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="roles" className="field-error" />

        <div className="button-group">
          <Submit disabled={props.loading} className="button button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
