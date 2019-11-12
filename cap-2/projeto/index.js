const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello() {
            return 'Hello GraphQL! :)'
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(({ port }) => console.log(`Server is running on localhost:${port}`))