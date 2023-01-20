import type { EditNoteById, UpdateNoteInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
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

        <div className="input-group">
          <Label
            name="title"
            className="label secondary"
            errorClassName="label label-error"
          >
            Title
          </Label>

          <TextField
            name="title"
            defaultValue={props.note?.title}
            className="input"
            errorClassName="input input-error"
            validation={{ required: true }}
          />

          <FieldError name="title" className="form-error" />
        </div>

        <Label
          name="content"
          className="label secondary"
          errorClassName="label label-error"
        >
          Content
        </Label>

        <TextAreaField
          rows={4}
          name="content"
          defaultValue={props.note?.content}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="content" className="form-error" />

        <div className="input-group">
          <Label
            name="authorId"
            className="label visually-hidden"
            errorClassName="label label-error"
          >
            Author id
          </Label>

          <NumberField
            name="authorId"
            defaultValue={props.note ? props.note.authorId : currentUser.id}
            className="input visually-hidden"
            errorClassName="input input-error"
          />

          <FieldError name="authorId" className="form-error" />
        </div>

        <div className="buttongroup">
          <Submit disabled={props.loading} className="button large expanded">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NoteForm
