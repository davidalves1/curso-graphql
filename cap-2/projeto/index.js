const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    scalar Date

    type Query {
        hello: String
        currentTime: String
        currentDate: Date
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
        },
        currentDate() {
            return new Date
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(({ port }) => console.log(`Server is running on localhost:${port}`))