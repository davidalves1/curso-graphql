const { users } = require('../data/db')

const NOT_FOUND_INDEX = -1

const getUserIndex = (key, compareValue) => users.findIndex(user => user[key] === compareValue)

module.exports = {
  getUserIndexByFilter(filter) {
    if (!filter) return NOT_FOUND_INDEX

    const { id, email } = filter

    if (id) return getUserIndex('id', id)

    if (email) return getUserIndex('email', email)

    return NOT_FOUND_INDEX
  },
}
