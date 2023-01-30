import { useState } from 'react'

import type { EditJobSheetById, UpdateJobSheetInput } from 'types/graphql'
import { v4 as uuidv4 } from 'uuid'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
  TextAreaField,
  DateField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'
import { routes, useMatch } from '@redwoodjs/router'

import DisplayCurrency from 'src/components/fn/DisplayCurrency/DisplayCurrency'
import GetWeekNumber from 'src/components/fn/GetWeekNumber/GetWeekNumber'
import { toJSONLocalDate } from 'src/lib/formatters'

type FormJobSheet = NonNullable<EditJobSheetById['jobSheet']>

interface JobSheetFormProps {
  jobSheet?: EditJobSheetById['jobSheet']
  onSave: (data: UpdateJobSheetInput, id?: FormJobSheet['id']) => void
  error: RWGqlError
  loading: boolean
}

const JobSheetForm = (props: JobSheetFormProps) => {
  const { currentUser } = useAuth()

  const jobIdValue = props.jobSheet ? props.jobSheet.jobId : uuidv4()

  const forWeekNumber = props.jobSheet
    ? props.jobSheet.forWeek
    : GetWeekNumber(new Date())

  const defaultDateValue = (datetime) => {
    if (props.jobSheet) {
      datetime = datetime.replace(/-/g, '/').replace(/T.+/, '')
      return toJSONLocalDate(new Date(datetime))
    } else {
      return toJSONLocalDate(new Date())
    }
  }

  const [isNewJob, setIsNewJob] = useState(useMatch(routes.newJobSheet()).match)

  const [markedDisplay, setMarkedDisplay] = useState(
    props.jobSheet?.markedAsComplete
  )

  const [currencyDisplay, setCurrencyDisplay] = useState(props.jobSheet?.total)

  const onSubmit = (data: FormJobSheet) => {
    props.onSave(data, props?.jobSheet?.id)
  }

  return (
    <div className="form-wrapper">
      <Form<FormJobSheet> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="form-error-wrapper"
          titleClassName="form-error-title"
          listClassName="form-error-list"
        />

        <Label
          name="jobId"
          className="label visually-hidden"
          errorClassName="label alert"
        >
          Job id
          <TextField
            name="jobId"
            defaultValue={jobIdValue}
            placeholder={jobIdValue}
            className="input"
            errorClassName="input input-error"
            readOnly
          />
          <FieldError name="jobId" className="form-error is-visible" />
        </Label>

        <div className="visually-hidden">
          <Label name="forWeek" className="label" errorClassName="label alert">
            For week
          </Label>
          <NumberField
            name="forWeek"
            defaultValue={parseInt(forWeekNumber)}
            placeholder={forWeekNumber.toString()}
            className="input"
            errorClassName="input input-error"
            validation={{ required: true }}
            readOnly
          />
          <FieldError name="forWeek" className="form-error is-visible" />
        </div>

        <div className="field-group">
          <Label
            name="startDate"
            className="label"
            errorClassName="label alert"
          >
            Start Date
          </Label>
          <DateField
            name="startDate"
            defaultValue={defaultDateValue(props.jobSheet?.startDate)}
            className="pure-input"
            errorClassName="pure-input pure-input-error"
            validation={{ required: true }}
          />
          <FieldError name="startDate" className="pure-field-error" />
        </div>

        <div className="field-group">
          <Label name="endDate" className="label" errorClassName="label alert">
            End Date
          </Label>
          <DateField
            name="endDate"
            defaultValue={defaultDateValue(props.jobSheet?.endDate)}
            className="pure-input"
            errorClassName="pure-input pure-input-error"
            validation={{ required: true }}
          />
          <FieldError name="endDate" className="pure-field-error" />
        </div>

        <Label name="retailer" className="label" errorClassName="label alert">
          Retailer
        </Label>
        <TextField
          name="retailer"
          defaultValue={props.jobSheet?.retailer}
          placeholder={"Retail Store's Name"}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />
        <FieldError name="retailer" className="form-error is-visible" />

        <Label name="rep" className="label" errorClassName="label alert">
          Rep
        </Label>
        <TextField
          name="rep"
          defaultValue={props.jobSheet?.rep}
          placeholder={'Retailer Sales Rep'}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />
        <FieldError name="rep" className="form-error is-visible" />

        <Label
          name="customerName"
          className="label"
          errorClassName="label alert"
        >
          Customer Name
        </Label>
        <TextField
          name="customerName"
          placeholder="Customer's Name"
          defaultValue={props.jobSheet?.customerName}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />
        <FieldError name="customerName" className="form-error is-visible" />

        <Label
          name="customerPhone"
          className="label"
          errorClassName="label alert"
        >
          Customer Phone
        </Label>
        <TextField
          name="customerPhone"
          placeholder="Customer's Phone #"
          defaultValue={props.jobSheet?.customerPhone}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="customerPhone" className="form-error is-visible" />

        <Label
          name="customerAddress"
          className="label"
          errorClassName="label alert"
        >
          Customer Address
        </Label>
        <TextField
          name="customerAddress"
          placeholder="Customer's Address"
          defaultValue={props.jobSheet?.customerAddress}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="customerAddress" className="form-error is-visible" />

        <Label name="purpose" className="label" errorClassName="label alert">
          Purpose
        </Label>
        <TextField
          name="purpose"
          placeholder="Remove & Install Carpet + patch near door"
          defaultValue={props.jobSheet?.purpose}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="purpose" className="form-error is-visible" />

        <Label
          name="subfloorType"
          className="label"
          errorClassName="label alert"
        >
          Subfloor type
        </Label>
        <TextField
          name="subfloorType"
          placeholder="Concrete / Wood / GypCrete"
          defaultValue={props.jobSheet?.subfloorType}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="subfloorType" className="form-error is-visible" />

        <Label name="notes" className="label" errorClassName="label alert">
          Notes
        </Label>
        <TextAreaField
          rows={8}
          placeholder="Enter a brief description of the work to be performed.  Be as precise or vague as you want, and remember this will get printed with all other fields."
          name="notes"
          defaultValue={props.jobSheet?.notes}
          className="input"
          errorClassName="input input-error"
        />
        <FieldError name="notes" className="form-error is-visible" />

        <Label name="total" className="label" errorClassName="label alert">
          Total
        </Label>

        <div className="input-group">
          <h4 className="input-group-label">
            {DisplayCurrency(currencyDisplay, 'USD')}
          </h4>
          <NumberField
            name="total"
            placeholder="123499"
            defaultValue={props.jobSheet?.total}
            className="input"
            errorClassName="input input-error"
            onChange={(e) => {
              setCurrencyDisplay(parseInt(e.target.value))
            }}
          />
        </div>
        <FieldError name="total" className="form-error is-visible" />
        <hr />
        <div className="input-group">
          <Label
            name="markedAsComplete"
            className={
              'expanded button ' + (markedDisplay ? 'success' : 'warning')
            }
            errorClassName="label alert"
          >
            {'Job ' + (markedDisplay ? 'Complete' : 'Incomplete') + ' '}
            <CheckboxField
              name="markedAsComplete"
              onChange={() => {
                setMarkedDisplay(!markedDisplay)
              }}
              defaultChecked={props.jobSheet?.markedAsComplete}
              className={'checkbox'}
              errorClassName="input input-error"
              readOnly={isNewJob}
            />
          </Label>
        </div>
        <FieldError name="markedAsComplete" className="form-error is-visible" />

        <div className="visually-hidden">
          <Label name="authorId" className="label" errorClassName="label alert">
            Author id
          </Label>

          <NumberField
            name="authorId"
            defaultValue={
              currentUser && props.jobSheet
                ? props.jobSheet.authorId
                : currentUser.id
            }
            className="input"
            errorClassName="input input-error"
            readOnly
          />

          <FieldError name="authorId" className="form-error is-visible" />
        </div>

        <div className="button-group">
          <Submit disabled={props.loading} className="button button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default JobSheetForm
