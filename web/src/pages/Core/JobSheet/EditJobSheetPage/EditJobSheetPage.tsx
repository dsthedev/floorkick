import EditJobSheetCell from 'src/components/Core/JobSheet/EditJobSheetCell'

type JobSheetPageProps = {
  id: number
}

const EditJobSheetPage = ({ id }: JobSheetPageProps) => {
  return <EditJobSheetCell id={id} />
}

export default EditJobSheetPage
