// import the gql tagged template function
const { gql } = require('apollo-server-express');


// create our typeDefs
const typeDefs = gql `
type Query {
    me: [User]
}
input BookInput {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
}
`;

// export the typeDefs
module.exports = typeDefs;