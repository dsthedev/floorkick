import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import JobSheetForm from 'src/components/Core/JobSheet/JobSheetForm'

import type { CreateJobSheetInput } from 'types/graphql'

const CREATE_JOB_SHEET_MUTATION = gql`
  mutation CreateJobSheetMutation($input: CreateJobSheetInput!) {
    createJobSheet(input: $input) {
      id
    }
  }
`

const NewJobSheet = () => {
  const [createJobSheet, { loading, error }] = useMutation(
    CREATE_JOB_SHEET_MUTATION,
    {
      onCompleted: () => {
        toast.success('JobSheet created')
        navigate(routes.jobSheets())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateJobSheetInput) => {
    createJobSheet({ variables: { input } })
  }

  return (
    <div className="segment">
      <header className="segment-header">
        <h2 className="heading heading-secondary">New JobSheet</h2>
      </header>
      <div className="segment-main">
        <JobSheetForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewJobSheet
