import type { FindJobSheetById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import JobSheet from 'src/components/Core/JobSheet/JobSheet'

export const QUERY = gql`
  query FindJobSheetById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>JobSheet not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="cell-error">{error?.message}</div>
)

export const Success = ({ jobSheet }: CellSuccessProps<FindJobSheetById>) => {
  return <JobSheet jobSheet={jobSheet} />
}
