const { users, nextId } = require('../data/db')

module.exports = {
  createUser(_, { data }) {
    const isEmailRegistered = users.some(user => user.email === data.email)

    if (isEmailRegistered) throw new Error('O e-mail informado já existe')

    const user = {
      id: nextId(),
      ...data,
      role_id: 1,
      status: 'ATIVO',
    }

    users.push(user)
    return user
  },
  updateUser(_, args) {
    const userIndex = users.findIndex(user => user.id === args.id)
    if (0 > userIndex) return null

    const user = {
      ...users[userIndex],
      ...args,
    }

    users.splice(userIndex, 1, user)
    return user
  },
  deleteUser(_, { id }) {
    const userIndex = users.findIndex(user => user.id === id)
    if (0 > userIndex) return null

    const [deletedUser] = users.splice(userIndex, 1)
    return deletedUser
  },
}
