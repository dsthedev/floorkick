import type {
  QueryResolvers,
  MutationResolvers,
  NoteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const notes: QueryResolvers['notes'] = () => {
  return db.note.findMany({
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

export const note: QueryResolvers['note'] = ({ id }) => {
  return db.note.findFirst({
    where: { id, authorId: context.currentUser.id },
  })
}

export const createNote: MutationResolvers['createNote'] = ({ input }) => {
  return db.note.create({
    data: input,
  })
}

export const updateNote: MutationResolvers['updateNote'] = ({ id, input }) => {
  return db.note.update({
    data: input,
    where: { id },
  })
}

export const deleteNote: MutationResolvers['deleteNote'] = ({ id }) => {
  return db.note.delete({
    where: { id },
  })
}

export const Note: NoteRelationResolvers = {
  author: (_obj, { root }) => {
    return db.note.findUnique({ where: { id: root?.id } }).author()
  },
}
