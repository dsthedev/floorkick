export const schema = gql`
  type Note {
    id: Int!
    body: String!
    User: User
    userId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    notes: [Note!]! @requireAuth
    note(id: Int!): Note @requireAuth
  }

  input CreateNoteInput {
    body: String!
    userId: Int
  }

  input UpdateNoteInput {
    body: String
    userId: Int
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note! @requireAuth
    updateNote(id: Int!, input: UpdateNoteInput!): Note! @requireAuth
    deleteNote(id: Int!): Note! @requireAuth
  }
`
