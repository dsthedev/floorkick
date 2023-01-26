import type {
  QueryResolvers,
  MutationResolvers,
  ServiceRateRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const serviceRates: QueryResolvers['serviceRates'] = () => {
  return db.serviceRate.findMany({
    where: {
      authorId: {
        equals: context.currentUser.id,
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })
}

export const serviceRate: QueryResolvers['serviceRate'] = ({ id }) => {
  return db.serviceRate.findFirst({
    where: { id, authorId: context.currentUser.id },
  })
}

export const createServiceRate: MutationResolvers['createServiceRate'] = ({
  input,
}) => {
  return db.serviceRate.create({
    data: input,
  })
}

export const updateServiceRate: MutationResolvers['updateServiceRate'] = ({
  id,
  input,
}) => {
  return db.serviceRate.update({
    data: input,
    where: { id },
  })
}

export const deleteServiceRate: MutationResolvers['deleteServiceRate'] = ({
  id,
}) => {
  return db.serviceRate.delete({
    where: { id },
  })
}

export const ServiceRate: ServiceRateRelationResolvers = {
  author: (_obj, { root }) => {
    return db.serviceRate.findUnique({ where: { id: root?.id } }).author()
  },
}
