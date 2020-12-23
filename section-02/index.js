const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.gql'),
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
