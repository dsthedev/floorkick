export const schema = gql`
  type ServiceRate {
    id: Int!
    uuid: String!
    name: String
    value: Int!
    currency: String
    unit: String!
    type: String!
    material: String!
    modifiers: String
    description: String
    ownerId: Int
    owner: User
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    serviceRates: [ServiceRate!]! @requireAuth
    serviceRate(id: Int!): ServiceRate @requireAuth
  }

  input CreateServiceRateInput {
    uuid: String!
    name: String
    value: Int!
    currency: String
    unit: String!
    type: String!
    material: String!
    modifiers: String
    description: String
    ownerId: Int
  }

  input UpdateServiceRateInput {
    uuid: String
    name: String
    value: Int
    currency: String
    unit: String
    type: String
    material: String
    modifiers: String
    description: String
    ownerId: Int
  }

  type Mutation {
    createServiceRate(input: CreateServiceRateInput!): ServiceRate! @requireAuth
    updateServiceRate(id: Int!, input: UpdateServiceRateInput!): ServiceRate!
      @requireAuth
    deleteServiceRate(id: Int!): ServiceRate! @requireAuth
  }
`
