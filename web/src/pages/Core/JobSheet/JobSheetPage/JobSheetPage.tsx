import JobSheetCell from 'src/components/Core/JobSheet/JobSheetCell'

type JobSheetPageProps = {
  id: number
}

const JobSheetPage = ({ id }: JobSheetPageProps) => {
  return <JobSheetCell id={id} />
}

export default JobSheetPage
