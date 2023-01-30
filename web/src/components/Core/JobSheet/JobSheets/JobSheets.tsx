import type {
  DeleteJobSheetMutationVariables,
  FindJobSheets,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Core/JobSheet/JobSheetsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

const DELETE_JOB_SHEET_MUTATION = gql`
  mutation DeleteJobSheetMutation($id: Int!) {
    deleteJobSheet(id: $id) {
      id
    }
  }
`

const JobSheetsList = ({ jobSheets }: FindJobSheets) => {
  const activeJobSheets = []
  const jobsMarkedAsComplete = []

  for (let jsi = 0; jsi < jobSheets.length; jsi++) {
    if (jobSheets[jsi].markedAsComplete === false) {
      activeJobSheets.push(jobSheets[jsi])
    } else {
      jobsMarkedAsComplete.push(jobSheets[jsi])
    }
  }

  const [deleteJobSheet] = useMutation(DELETE_JOB_SHEET_MUTATION, {
    onCompleted: () => {
      toast.success('JobSheet deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteJobSheetMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete jobSheet ' + id + '?')) {
      deleteJobSheet({ variables: { id } })
    }
  }

  return (
    <div className="">
      <header className="title-bar">
        <h2 className="h5">Active Jobs</h2>
      </header>
      <table className="table hover">
        <thead>
          <tr>
            <th>Date, Rep, Purpose</th>
            {/* <th>Id</th> */}
            {/* <th>Job id</th> */}
            {/* <th>End date</th> */}
            {/* <th>For week</th> */}
            {/* <th>Retailer</th> */}
            {/* <th>Customer name</th> */}
            {/* <th>Customer phone</th> */}
            {/* <th>Customer address</th> */}
            {/* <th>Subfloor type</th> */}
            {/* <th>Notes</th> */}
            {/* <th>Total</th> */}
            {/* <th>Marked as complete</th> */}
            {/* <th>Author id</th> */}
            {/* <th>Created at</th> */}
            {/* <th>Updated at</th> */}
          </tr>
        </thead>
        <tbody>
          {activeJobSheets.map((jobSheet) => (
            <tr key={jobSheet.id}>
              <td>
                <strong>{timeTag(jobSheet.startDate)}</strong>,{' '}
                <small>{truncate(jobSheet.rep)}</small>,
                {truncate(jobSheet.purpose)}
                <br />
                <nav className="table-actions">
                  <Link
                    to={routes.jobSheet({ id: jobSheet.id })}
                    title={'Show jobSheet ' + jobSheet.id + ' detail'}
                    className="button small secondary"
                  >
                    View
                  </Link>
                  <Link
                    to={routes.editJobSheet({ id: jobSheet.id })}
                    title={'Edit jobSheet ' + jobSheet.id}
                    className="button small"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete jobSheet ' + jobSheet.id}
                    className="button small alert"
                    onClick={() => onDeleteClick(jobSheet.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
              {/* <td>{truncate(jobSheet.id)}</td> */}
              {/* <td>{truncate(jobSheet.jobId)}</td> */}
              {/* <td>{timeTag(jobSheet.endDate)}</td> */}
              {/* <td>{truncate(jobSheet.forWeek)}</td> */}
              {/* <td>{truncate(jobSheet.retailer)}</td> */}
              {/* <td>{truncate(jobSheet.customerName)}</td> */}
              {/* <td>{truncate(jobSheet.customerPhone)}</td> */}
              {/* <td>{truncate(jobSheet.customerAddress)}</td> */}
              {/* <td>{truncate(jobSheet.subfloorType)}</td> */}
              {/* <td>{truncate(jobSheet.notes)}</td> */}
              {/* <td>{truncate(jobSheet.total)}</td> */}
              {/* <td>{checkboxInputTag(jobSheet.markedAsComplete)}</td> */}
              {/* <td>{truncate(jobSheet.authorId)}</td> */}
              {/* <td>{timeTag(jobSheet.createdAt)}</td> */}
              {/* <td>{timeTag(jobSheet.updatedAt)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <header className="title-bar">
        <h2 className="h5">Completed Jobs</h2>
      </header>
      <table className="table hover">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            {/* <th>Job id</th> */}
            <th>Start date</th>
            {/* <th>End date</th> */}
            {/* <th>For week</th> */}
            {/* <th>Retailer</th> */}
            <th>Rep</th>
            {/* <th>Customer name</th> */}
            {/* <th>Customer phone</th> */}
            {/* <th>Customer address</th> */}
            <th>Purpose</th>
            {/* <th>Subfloor type</th> */}
            {/* <th>Notes</th> */}
            {/* <th>Total</th> */}
            {/* <th>Marked as complete</th> */}
            {/* <th>Author id</th> */}
            {/* <th>Created at</th> */}
            {/* <th>Updated at</th> */}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {jobsMarkedAsComplete.map((jobSheet) => (
            <tr key={jobSheet.id}>
              {/* <td>{truncate(jobSheet.id)}</td> */}
              {/* <td>{truncate(jobSheet.jobId)}</td> */}
              <td>{timeTag(jobSheet.startDate)}</td>
              {/* <td>{timeTag(jobSheet.endDate)}</td> */}
              {/* <td>{truncate(jobSheet.forWeek)}</td> */}
              {/* <td>{truncate(jobSheet.retailer)}</td> */}
              <td>{truncate(jobSheet.rep)}</td>
              {/* <td>{truncate(jobSheet.customerName)}</td> */}
              {/* <td>{truncate(jobSheet.customerPhone)}</td> */}
              {/* <td>{truncate(jobSheet.customerAddress)}</td> */}
              <td>{truncate(jobSheet.purpose)}</td>
              {/* <td>{truncate(jobSheet.subfloorType)}</td> */}
              {/* <td>{truncate(jobSheet.notes)}</td> */}
              {/* <td>{truncate(jobSheet.total)}</td> */}
              {/* <td>{checkboxInputTag(jobSheet.markedAsComplete)}</td> */}
              {/* <td>{truncate(jobSheet.authorId)}</td> */}
              {/* <td>{timeTag(jobSheet.createdAt)}</td> */}
              {/* <td>{timeTag(jobSheet.updatedAt)}</td> */}
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.jobSheet({ id: jobSheet.id })}
                    title={'Show jobSheet ' + jobSheet.id + ' detail'}
                    className="button small secondary"
                  >
                    View
                  </Link>
                  <Link
                    to={routes.editJobSheet({ id: jobSheet.id })}
                    title={'Edit jobSheet ' + jobSheet.id}
                    className="button small"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete jobSheet ' + jobSheet.id}
                    className="button small alert"
                    onClick={() => onDeleteClick(jobSheet.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobSheetsList
