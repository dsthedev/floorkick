import type {
  QueryResolvers,
  MutationResolvers,
  RealmRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const realms: QueryResolvers['realms'] = () => {
  return db.realm.findMany({
    where: {
      ownerId: {
        equals: context.currentUser.id,
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })
}

export const realm: QueryResolvers['realm'] = ({ id }) => {
  return db.realm.findFirst({
    where: { id, ownerId: context.currentUser.id },
  })
}

export const createRealm: MutationResolvers['createRealm'] = ({ input }) => {
  return db.realm.create({
    data: input,
  })
}

export const updateRealm: MutationResolvers['updateRealm'] = ({
  id,
  input,
}) => {
  return db.realm.update({
    data: input,
    where: { id },
  })
}

export const deleteRealm: MutationResolvers['deleteRealm'] = ({ id }) => {
  return db.realm.delete({
    where: { id },
  })
}

export const Realm: RealmRelationResolvers = {
  owner: (_obj, { root }) => {
    return db.realm.findUnique({ where: { id: root?.id } }).owner()
  },
}
