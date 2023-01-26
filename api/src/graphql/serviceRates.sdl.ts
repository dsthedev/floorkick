export const schema = gql`
  type ServiceRate {
    id: Int!
    value: Int!
    unit: String!
    task: String!
    material: String!
    modifiers: String
    description: String
    authorId: Int
    author: User
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    serviceRates: [ServiceRate!]! @requireAuth
    myServiceRates: [ServiceRate!]! @requireAuth
    serviceRate(id: Int!): ServiceRate @requireAuth
  }

  input CreateServiceRateInput {
    value: Int!
    unit: String!
    task: String!
    material: String!
    modifiers: String
    description: String
    authorId: Int
  }

  input UpdateServiceRateInput {
    value: Int
    unit: String
    task: String
    material: String
    modifiers: String
    description: String
    authorId: Int
  }

  type Mutation {
    createServiceRate(input: CreateServiceRateInput!): ServiceRate! @requireAuth
    updateServiceRate(id: Int!, input: UpdateServiceRateInput!): ServiceRate!
      @requireAuth
    deleteServiceRate(id: Int!): ServiceRate! @requireAuth
  }
`
