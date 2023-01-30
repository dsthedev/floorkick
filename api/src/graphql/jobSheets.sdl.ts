export const schema = gql`
  type JobSheet {
    id: Int!
    jobId: String
    startDate: DateTime!
    endDate: DateTime!
    forWeek: Int!
    retailer: String!
    rep: String!
    customerName: String!
    customerPhone: String
    customerAddress: String!
    purpose: String!
    subfloorType: String!
    notes: String
    total: Int
    markedAsComplete: Boolean!
    author: User
    authorId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    jobSheets: [JobSheet!]! @requireAuth
    jobSheet(id: Int!): JobSheet @requireAuth
  }

  input CreateJobSheetInput {
    jobId: String
    startDate: DateTime!
    endDate: DateTime!
    forWeek: Int!
    retailer: String!
    rep: String!
    customerName: String!
    customerPhone: String
    customerAddress: String!
    purpose: String!
    subfloorType: String!
    notes: String
    total: Int
    markedAsComplete: Boolean!
    authorId: Int
  }

  input UpdateJobSheetInput {
    jobId: String
    startDate: DateTime
    endDate: DateTime
    forWeek: Int
    retailer: String
    rep: String
    customerName: String
    customerPhone: String
    customerAddress: String
    purpose: String
    subfloorType: String
    notes: String
    total: Int
    markedAsComplete: Boolean
    authorId: Int
  }

  type Mutation {
    createJobSheet(input: CreateJobSheetInput!): JobSheet! @requireAuth
    updateJobSheet(id: Int!, input: UpdateJobSheetInput!): JobSheet!
      @requireAuth
    deleteJobSheet(id: Int!): JobSheet! @requireAuth
  }
`
