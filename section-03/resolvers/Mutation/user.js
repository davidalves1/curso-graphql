const { users, nextId } = require('../../data/db')
const { getUserIndexByFilter } = require('../../services/user')

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
  updateUser(_, { filter, data }) {
    const userIndex = getUserIndexByFilter(filter)
    if (0 > userIndex) return null

    const user = {
      ...users[userIndex],
      ...data,
    }

    users.splice(userIndex, 1, user)
    return user
  },
  deleteUser(_, { filter }) {
    const userIndex = getUserIndexByFilter(filter)
    if (0 > userIndex) return null

    const [deletedUser] = users.splice(userIndex, 1)
    return deletedUser
  },
}
