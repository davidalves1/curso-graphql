const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    scalar Date

    type Query {
        hello: String
        currentTime: String
        currentDate: Date
        currentUser: User
        product: Product
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean!
    }

    type Product {
        name: String!
        price: Float!
        discount: Float
        priceWithDiscount: Float
    }
`

const resolvers = {
    User: {
        salary(user) {
            return user.real_salary
        }
    },
    Product: {
        priceWithDiscount(parent) {
            if (!parent.discount || parent.discount < 0) {
                return null
            }

            return parent.price - parent.discount
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
        },
        product() {
            const discount = Math.round(Math.random() * 10000) / 100
            console.log({discount})

            return {
                name: 'Bola Quadrada',
                price: 199.9,
                discount: discount > 30 ? discount : null 
            }
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(({ port }) => console.log(`Server is running on localhost:${port}`))