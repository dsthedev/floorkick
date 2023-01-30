import type {
  QueryResolvers,
  MutationResolvers,
  JobSheetRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobSheets: QueryResolvers['jobSheets'] = () => {
  return db.jobSheet.findMany()
}

export const jobSheet: QueryResolvers['jobSheet'] = ({ id }) => {
  return db.jobSheet.findUnique({
    where: { id },
  })
}

export const createJobSheet: MutationResolvers['createJobSheet'] = ({
  input,
}) => {
  return db.jobSheet.create({
    data: input,
  })
}

export const updateJobSheet: MutationResolvers['updateJobSheet'] = ({
  id,
  input,
}) => {
  return db.jobSheet.update({
    data: input,
    where: { id },
  })
}

export const deleteJobSheet: MutationResolvers['deleteJobSheet'] = ({ id }) => {
  return db.jobSheet.delete({
    where: { id },
  })
}

export const JobSheet: JobSheetRelationResolvers = {
  author: (_obj, { root }) => {
    return db.jobSheet.findUnique({ where: { id: root?.id } }).author()
  },
}
