import { useState } from 'react'

import type { EditServiceRateById, UpdateServiceRateInput } from 'types/graphql'
import { v4 as uuidv4 } from 'uuid'

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
  const uuidValue = props.serviceRate ? props.serviceRate.uuid : uuidv4()

  const onSubmit = (data: FormServiceRate) => {
    props.onSave(data, props?.serviceRate?.id)
  }

  return (
    <div className="form-wrapper">
      <Form<FormServiceRate> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="form-error-wrapper"
          titleClassName="form-error-title"
          listClassName="form-error-list"
        />

        <div className="input-group visually-hidden">
          <Label
            name="uuid"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Uuid</h6>
          </Label>

          <TextField
            name="uuid"
            defaultValue={uuidValue}
            className="input visually-hidden"
            errorClassName="input input-error"
            validation={{ required: true }}
            disabled
          />

          <FieldError name="uuid" className="form-error" />
        </div>

        <div className="input-group visually-hidden">
          <Label
            name="name"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Name</h6>
          </Label>

          <TextField
            name="name"
            defaultValue={props.serviceRate?.name}
            className="input visually-hidden"
            errorClassName="input input-error"
            disabled
          />

          <FieldError name="name" className="form-error visually-hidden" />
        </div>

        <div className="input-group">
          <Label
            name="value"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Rate</h6>
          </Label>

          <span className="input-group-label">
            {DisplayCurrency(currencyDisplay, props.serviceRate?.currency)}
          </span>

          <NumberField
            name="value"
            placeholder="9.00"
            defaultValue={props.serviceRate?.value}
            className="input"
            errorClassName="input input-error"
            validation={{ required: true }}
            onChange={(e) => setCurrencyDisplay(e.target.value)}
          />

          <FieldError name="value" className="form-error" />

          <Label
            name="unit"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Per</h6>
          </Label>

          <TextField
            name="unit"
            placeholder="Sq Ft, Sq Yd, Trip, Sheet, etc..."
            defaultValue={props.serviceRate?.unit}
            className="input"
            errorClassName="input input-error"
            validation={{ required: true }}
          />

          <FieldError name="unit" className="form-error" />
        </div>

        <div className="input-group visually-hidden">
          <Label
            name="currency"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Currency</h6>
          </Label>

          <TextField
            name="currency"
            defaultValue={props.serviceRate?.currency}
            className="input"
            errorClassName="input input-error"
          />

          <FieldError name="currency" className="form-error" />
        </div>
        <hr />
        <div className="input-group">
          <Label
            name="type"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Task</h6>
          </Label>

          <TextField
            name="type"
            placeholder="Install, Remove, Repair..."
            defaultValue={props.serviceRate?.type}
            className="input"
            errorClassName="input input-error"
            validation={{ required: true }}
          />

          <FieldError name="type" className="form-error" />

          <Label
            name="material"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Material</h6>
          </Label>

          <TextField
            name="material"
            placeholder="Carpet, LVT, Tile..."
            defaultValue={props.serviceRate?.material}
            className="input"
            errorClassName="input input-error"
            validation={{ required: true }}
          />

          <FieldError name="material" className="form-error" />
        </div>
        <hr />
        <div className="input-group">
          <Label
            name="modifiers"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Extra</h6>
          </Label>

          <TextField
            name="modifiers"
            placeholder="Softback, Pattern, Herringbone, etc..."
            defaultValue={props.serviceRate?.modifiers}
            className="input"
            errorClassName="input input-error"
          />

          <FieldError name="modifiers" className="form-error" />
        </div>

        <div className="inputs-group">
          <Label
            name="description"
            className="label secondary"
            errorClassName="label alert label-error"
          >
            <h6>Comments</h6>
          </Label>

          <TextAreaField
            name="description"
            rows={4}
            placeholder="Enter extra descriptive information about this service's rate here."
            defaultValue={props.serviceRate?.description}
            className="input"
            errorClassName="input input-error"
          />

          <FieldError name="description" className="form-error" />
        </div>

        <div className="input-group">
          <Label
            name="ownerId"
            className="label secondary visually-hidden"
            errorClassName="label alert label-error"
          >
            <h6>Owner</h6>
          </Label>

          <NumberField
            name="ownerId"
            defaultValue={
              props.serviceRate ? props.serviceRate.ownerId : currentUser.id
            }
            className="input visually-hidden"
            errorClassName="input input-error"
          />

          <FieldError name="ownerId" className="form-error" />
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

export default ServiceRateForm
