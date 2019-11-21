const { GraphQLServer } = require("graphql-yoga");

const users = [
  {
    id: "123132",
    name: "David Alves",
    email: "alves.david@outlook.com",
    age: 32,
    real_salary: Math.round(Math.random() * 1000000) / 100,
    vip: true
  },
  {
    id: "64654321",
    name: "José Alves",
    email: "alves.jose@email.com",
    age: 42,
    real_salary: Math.round(Math.random() * 1000000) / 100,
    vip: false
  },
  {
    id: "6543216",
    name: "João Alves",
    email: "alves.joao@email.com",
    age: 22,
    real_salary: Math.round(Math.random() * 1000000) / 100,
    vip: false
  }
];

const roles = [
  {
    id: '1',
    name: 'Comum'
  },
  {
    id: '2',
    name: 'Administrador'
  },
];

const typeDefs = `
    scalar Date

    type Query {
      hello: String
      currentTime: String
      currentDate: Date
      currentUser: User
      featuredProduct: Product
      lotoNumbers: [Int!]!
      allUsers: [User!]!
      showUser(id: ID): User
      allRoles: [Role]
      showRole(id: ID): Role
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

    type Role {
      id: ID!
      name: String!
    }
`;

const resolvers = {
  User: {
    salary(user) {
      return user.real_salary;
    }
  },
  Product: {
    priceWithDiscount(parent) {
      if (!parent.discount || parent.discount < 0) {
        return null;
      }

      return parent.price - parent.discount;
    }
  },
  Query: {
    hello() {
      return "Hello GraphQL! :)";
    },
    currentTime() {
      const time = new Date();
      return `${time.toLocaleDateString("pt-BR")} ${time.toLocaleTimeString("pt-BR")}`;
    },
    currentDate() {
      return new Date();
    },
    currentUser() {
      return {
        id: "123132",
        name: "David Alves",
        email: "alves.david@outlook.com",
        age: 32,
        real_salary: Math.round(Math.random() * 1000000) / 100,
        vip: false
      };
    },
    featuredProduct() {
      const discount = Math.round(Math.random() * 10000) / 100;
      console.log({ discount });

      return {
        name: "Bola Quadrada",
        price: 199.9,
        discount: discount > 30 ? discount : null
      };
    },
    lotoNumbers() {
      // retorna um array com 6 posições de números entre 1 e 75
      return Array(6)
        .fill(0)
        .map(() => parseInt(Math.random() * 75) + 1)
        .sort((a, b) => a - b); // a - b ordena em ordem crescente
    },
    allUsers() {
      return users;
    },
    showUser(_, { id }) {
      // O ID é do tipo string, se estiver usando como Int utilizar ==
      const user = users.find(user => user.id === id);

      return user || null;
    },
    allRoles() {
      return roles;
    },
    showRole(_, { id }) {
      const role = roles.find((role) => role.id === id);

      return role || null;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(({ port }) => console.log(`Server is running on localhost:${port}`));
