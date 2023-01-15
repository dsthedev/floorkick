import type { EditNoteById, UpdateNoteInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormNote = NonNullable<EditNoteById['note']>

interface NoteFormProps {
  note?: EditNoteById['note']
  onSave: (data: UpdateNoteInput, id?: FormNote['id']) => void
  error: RWGqlError
  loading: boolean
}

const NoteForm = (props: NoteFormProps) => {
  const { currentUser } = useAuth()
  const onSubmit = (data: FormNote) => {
    props.onSave(data, props?.note?.id)
  }

  return (
    <div className="form-wrapper">
      <Form<FormNote> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="form-error-wrapper"
          titleClassName="form-error-title"
          listClassName="form-error-list"
        />

        <Label name="body" className="label" errorClassName="label label-error">
          <span className="visually-hidden">Body</span>
          <TextAreaField
            name="body"
            defaultValue={props.note?.body}
            className="input"
            errorClassName="input input-error"
            validation={{ required: true }}
            rows="4"
          />
        </Label>

        <FieldError name="body" className="field-error" />

        <Label
          name="authorId"
          className="label visually-hidden"
          errorClassName="label label-error"
        >
          Author ID
          <NumberField
            name="authorId"
            defaultValue={props.note ? props.note.authorId : currentUser.id}
            className="input"
            errorClassName="input input-error"
            readOnly
          />
        </Label>

        <FieldError name="authorId" className="field-error" />

        <div className="button-group">
          <Submit disabled={props.loading} className="button button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NoteForm
