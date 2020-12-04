const users = [
  {
    id: '123132',
    role_id: 2,
    name: 'David Alves',
    email: 'alves.david@outlook.com',
    age: 32,
    real_salary: Math.round(Math.random() * 1000000) / 100,
    vip: true,
  },
  {
    id: '64654321',
    role_id: 1,
    name: 'José Alves',
    email: 'alves.jose@email.com',
    age: 42,
    real_salary: Math.round(Math.random() * 1000000) / 100,
    vip: false,
  },
  {
    id: '6543216',
    role_id: 1,
    name: 'João Alves',
    email: 'alves.joao@email.com',
    age: 22,
    real_salary: Math.round(Math.random() * 1000000) / 100,
    vip: false,
  },
];

const roles = [
  {
    id: 1,
    name: 'Comum',
  },
  {
    id: 2,
    name: 'Administrador',
  },
];

module.exports = {
  users,
  roles,
};
