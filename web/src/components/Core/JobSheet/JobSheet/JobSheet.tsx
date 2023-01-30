import type {
  DeleteJobSheetMutationVariables,
  FindJobSheetById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_JOB_SHEET_MUTATION = gql`
  mutation DeleteJobSheetMutation($id: Int!) {
    deleteJobSheet(id: $id) {
      id
    }
  }
`

interface Props {
  jobSheet: NonNullable<FindJobSheetById['jobSheet']>
}

const JobSheet = ({ jobSheet }: Props) => {
  const [deleteJobSheet] = useMutation(DELETE_JOB_SHEET_MUTATION, {
    onCompleted: () => {
      toast.success('JobSheet deleted')
      navigate(routes.jobSheets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteJobSheetMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete jobSheet ' + id + '?')) {
      deleteJobSheet({ variables: { id } })
    }
  }

  return (
    <>
      <div className="segment">
        <header className="segment-header">
          <h2 className="heading heading-secondary">
            JobSheet {jobSheet.id} Detail
          </h2>
        </header>
        <table className="table">
          <tbody>
            {/* <tr>
              <th>Id</th>
              <td>{jobSheet.id}</td>
            </tr>
            <tr>
              <th>Job id</th>
              <td>{jobSheet.jobId}</td>
            </tr> */}
            <tr>
              <th>Start date</th>
              <td>{timeTag(jobSheet.startDate)}</td>
            </tr>
            <tr>
              <th>End date</th>
              <td>{timeTag(jobSheet.endDate)}</td>
            </tr>
            {/* <tr>
              <th>For week</th>
              <td>{jobSheet.forWeek}</td>
            </tr> */}
            <tr>
              <th>Retailer</th>
              <td>{jobSheet.retailer}</td>
            </tr>
            <tr>
              <th>Rep</th>
              <td>{jobSheet.rep}</td>
            </tr>
            <tr>
              <th>Customer name</th>
              <td>{jobSheet.customerName}</td>
            </tr>
            <tr>
              <th>Customer phone</th>
              <td>{jobSheet.customerPhone}</td>
            </tr>
            <tr>
              <th>Customer address</th>
              <td>{jobSheet.customerAddress}</td>
            </tr>
            <tr>
              <th>Purpose</th>
              <td>{jobSheet.purpose}</td>
            </tr>
            <tr>
              <th>Subfloor type</th>
              <td>{jobSheet.subfloorType}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{jobSheet.notes}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{jobSheet.total}</td>
            </tr>
            <tr>
              <th>Marked as complete</th>
              <td>{checkboxInputTag(jobSheet.markedAsComplete)}</td>
            </tr>
            {/* <tr>
              <th>Author id</th>
              <td>{jobSheet.authorId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(jobSheet.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(jobSheet.updatedAt)}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <nav className="button-group">
        <Link
          to={routes.editJobSheet({ id: jobSheet.id })}
          className="button button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="button button-red"
          onClick={() => onDeleteClick(jobSheet.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default JobSheet
