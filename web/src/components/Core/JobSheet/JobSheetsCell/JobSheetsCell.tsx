import type { FindJobSheets } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import JobSheets from 'src/components/Core/JobSheet/JobSheets'

import EmptyJobSheetGuide from '../EmptyJobSheetGuide/EmptyJobSheetGuide'

export const QUERY = gql`
  query FindJobSheets {
    jobSheets {
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

export const Empty = () => {
  return <EmptyJobSheetGuide />
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ jobSheets }: CellSuccessProps<FindJobSheets>) => {
  return <JobSheets jobSheets={jobSheets} />
}
