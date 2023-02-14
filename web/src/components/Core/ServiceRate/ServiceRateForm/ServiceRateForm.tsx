import { useState } from 'react'

import type { EditServiceRateById, UpdateServiceRateInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import DisplayCurrency from 'src/components/fn/DisplayCurrency/DisplayCurrency'

type FormServiceRate = NonNullable<EditServiceRateById['serviceRate']>

interface ServiceRateFormProps {
  serviceRate?: EditServiceRateById['serviceRate']
  onSave: (data: UpdateServiceRateInput, id?: FormServiceRate['id']) => void
  error: RWGqlError
  loading: boolean
}

const ServiceRateForm = (props: ServiceRateFormProps) => {
  const { currentUser } = useAuth()

  const [currencyDisplay, setCurrencyDisplay] = useState(
    props.serviceRate?.value
  )

  const onSubmit = (data: FormServiceRate) => {
    props.onSave(data, props?.serviceRate?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormServiceRate>
        onSubmit={onSubmit}
        error={props.error}
        className="grid-x grid-margin-x"
      >
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <div className="cell small-8">
          <Label
            name="value"
            className="is-label"
            errorClassName="is-invalid-label"
          >
            Cost
          </Label>
          <div className="input-group">
            <h4 className="input-group-label">
              {DisplayCurrency(currencyDisplay, 'USD')}
            </h4>
            <NumberField
              name="value"
              placeholder="900"
              defaultValue={props.serviceRate?.value}
              className="input"
              errorClassName="input input-error"
              validation={{ required: true }}
              onChange={(e) => {
                setCurrencyDisplay(e.target.value.toString())
              }}
            />
          </div>
          <FieldError name="value" className="form-error is-visible" />
        </div>

        <div className="cell small-4">
          <Label
            name="unit"
            className="is-label"
            errorClassName="is-invalid-label"
          >
            Per
            <TextField
              name="unit"
              placeholder="SqFt, SqYd, Trip, Sheet, etc..."
              defaultValue={props.serviceRate?.unit}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true }}
            />
            <FieldError name="unit" className="form-error is-visible" />
          </Label>
        </div>

        <div className="cell small-6">
          {' '}
          <Label
            name="task"
            className="is-label"
            errorClassName="is-invalid-label"
          >
            Task
            <TextField
              name="task"
              placeholder="Install, Remove, Repair..."
              defaultValue={props.serviceRate?.task}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true }}
            />
            <FieldError name="task" className="form-error is-visible" />
          </Label>
        </div>

        <div className="cell small-6">
          <Label
            name="material"
            className="is-label"
            errorClassName="is-invalid-label"
          >
            Material
            <TextField
              name="material"
              placeholder="Carpet, Vinyl, Ceramic..."
              defaultValue={props.serviceRate?.material}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true }}
            />
            <FieldError name="material" className="form-error is-visible" />
          </Label>
        </div>

        <div className="cell">
          <Label
            name="modifiers"
            className="is-label"
            errorClassName="is-invalid-label"
          >
            Modifiers
            <TextField
              name="modifiers"
              placeholder="Softback, Pattern, Herringbone, etc..."
              defaultValue={props.serviceRate?.modifiers}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
            />
            <FieldError name="modifiers" className="form-error is-visible" />
          </Label>
        </div>

        <div className="cell">
          <Label
            name="description"
            className="is-label"
            errorClassName="is-invalid-label"
          >
            Description
            <TextAreaField
              name="description"
              placeholder="Enter extra descriptive information about this service's rate here."
              rows={4}
              defaultValue={props.serviceRate?.description}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
            />
            <FieldError name="description" className="form-error is-visible" />
          </Label>
        </div>

        <div className="visually-hidden">
          <Label
            name="authorId"
            className="is-label"
            errorClassName="is-invalid-label"
          >
            Author ID
            <NumberField
              name="authorId"
              defaultValue={
                props.serviceRate ? props.serviceRate.authorId : currentUser.id
              }
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              readOnly
            />
            <FieldError name="authorId" className="form-error is-visible" />
          </Label>
        </div>

        <hr />
        <Submit
          disabled={props.loading}
          className="button is-primary is-large is-fullwidth"
        >
          Save
        </Submit>
      </Form>
    </div>
  )
}

export default ServiceRateForm
