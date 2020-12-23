const { users, roles } = require('../db');

module.exports = {
  hello() {
    return 'Hello GraphQL! :)';
  },
  currentTime() {
    const time = new Date();
    return `${time.toLocaleDateString('pt-BR')} ${time.toLocaleTimeString('pt-BR')}`;
  },
  currentDate() {
    return new Date();
  },
  currentUser() {
    return {
      id: '123132',
      name: 'David Alves',
      email: 'alves.david@outlook.com',
      age: 32,
      real_salary: Math.round(Math.random() * 1000000) / 100,
      vip: false,
    };
  },
  featuredProduct() {
    const discount = Math.round(Math.random() * 10000) / 100;
    console.log({ discount });

    return {
      name: 'Bola Quadrada',
      price: 199.9,
      discount: discount > 30 ? discount : null,
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
    // O ID é do tipo string, se estiver usando como Int utilizar == ou utilizar o tipo Int ao invés de ID
    const user = users.find((user) => user.id === id);

    return user || null;
  },
  allRoles() {
    return roles;
  },
  showRole(_, { id }) {
    const role = roles.find((role) => role.id === id);

    return role || null;
  },
};
