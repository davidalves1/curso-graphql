const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    type Query {
        hello: String
        currentTime: String
    }
`

const resolvers = {
    Query: {
        hello() {
            return 'Hello GraphQL! :)'
        },
        currentTime() {
            const time = new Date()
            return `${time.toLocaleDateString('pt-BR')} ${time.toLocaleTimeString('pt-BR')}`
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(({ port }) => console.log(`Server is running on localhost:${port}`))