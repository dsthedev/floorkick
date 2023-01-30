import type { EditJobSheetById, UpdateJobSheetInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import JobSheetForm from 'src/components/Core/JobSheet/JobSheetForm'

export const QUERY = gql`
  query EditJobSheetById($id: Int!) {
    jobSheet: jobSheet(id: $id) {
      id
      jobId
      startDate
      endDate
      forWeek
      retailer
      rep
      customerName
      customerPhone
      customerAddress
      purpose
      subfloorType
      notes
      total
      markedAsComplete
      authorId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_JOB_SHEET_MUTATION = gql`
  mutation UpdateJobSheetMutation($id: Int!, $input: UpdateJobSheetInput!) {
    updateJobSheet(id: $id, input: $input) {
      id
      jobId
      startDate
      endDate
      forWeek
      retailer
      rep
      customerName
      customerPhone
      customerAddress
      purpose
      subfloorType
      notes
      total
      markedAsComplete
      authorId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ jobSheet }: CellSuccessProps<EditJobSheetById>) => {
  const [updateJobSheet, { loading, error }] = useMutation(
    UPDATE_JOB_SHEET_MUTATION,
    {
      onCompleted: () => {
        toast.success('JobSheet updated')
        navigate(routes.jobSheets())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateJobSheetInput,
    id: EditJobSheetById['jobSheet']['id']
  ) => {
    updateJobSheet({ variables: { id, input } })
  }

  return (
    <div className="segment">
      <header className="segment-header">
        <h2 className="heading heading-secondary">
          Edit JobSheet {jobSheet?.id}
        </h2>
      </header>
      <div className="segment-main">
        <JobSheetForm
          jobSheet={jobSheet}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
