const { users, roles } = require('../data/db')

module.exports = {
  users() {
    return users
  },
  user(_, { id }) {
    const sels = users.filter(u => u.id === id)
    return sels ? sels[0] : null
  },
  roles() {
    return roles
  },
  role(_, { id }) {
    const sels = roles.filter(p => p.id === id)
    return sels ? sels[0] : null
  },
}
