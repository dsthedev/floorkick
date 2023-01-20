export const schema = gql`
  type Realm {
    id: Int!
    title: String!
    address: String
    city: String
    state: String
    zip: Int
    lat: String
    long: String
    ownerId: Int
    owner: User
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    realms: [Realm!]! @requireAuth
    realm(id: Int!): Realm @requireAuth
  }

  input CreateRealmInput {
    title: String!
    address: String
    city: String
    state: String
    zip: Int
    lat: String
    long: String
    ownerId: Int
  }

  input UpdateRealmInput {
    title: String
    address: String
    city: String
    state: String
    zip: Int
    lat: String
    long: String
    ownerId: Int
  }

  type Mutation {
    createRealm(input: CreateRealmInput!): Realm! @requireAuth
    updateRealm(id: Int!, input: UpdateRealmInput!): Realm! @requireAuth
    deleteRealm(id: Int!): Realm! @requireAuth
  }
`
