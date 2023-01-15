export const schema = gql`
  type Note {
    id: Int!
    body: String!
    author: User
    authorId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    notes: [Note!]! @requireAuth
    note(id: Int!): Note @requireAuth
  }

  input CreateNoteInput {
    body: String!
    authorId: Int
  }

  input UpdateNoteInput {
    body: String
    authorId: Int
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note! @requireAuth
    updateNote(id: Int!, input: UpdateNoteInput!): Note! @requireAuth
    deleteNote(id: Int!): Note! @requireAuth
  }
`
