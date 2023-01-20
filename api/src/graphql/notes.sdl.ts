export const schema = gql`
  type Note {
    id: Int!
    title: String!
    content: String
    authorId: Int
    author: User
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    notes: [Note!]! @requireAuth
    note(id: Int!): Note @requireAuth
  }

  input CreateNoteInput {
    title: String!
    content: String
    authorId: Int
  }

  input UpdateNoteInput {
    title: String
    content: String
    authorId: Int
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note! @requireAuth
    updateNote(id: Int!, input: UpdateNoteInput!): Note! @requireAuth
    deleteNote(id: Int!): Note! @requireAuth
  }
`
