const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    scalar Date

    type Query {
        hello: String
        currentTime: String
        currentDate: Date
        currentUser: User
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean!
    }
`

const resolvers = {
    User: {
        salary(user) {
            return user.real_salary
        }
    },
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
        },
        currentUser() {
            return {
                id: '123132',
                name: 'David Alves',
                email: 'alves.david@outlook.com',
                age: 32,
                real_salary: Math.round(Math.random() * 1000000) / 100,
                vip: false
            }
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(({ port }) => console.log(`Server is running on localhost:${port}`))