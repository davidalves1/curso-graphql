const { roles } = require('../data/db')

const NOT_FOUND_INDEX = -1

module.exports = {
  getRoleIndex(id) {
    if (!id) return NOT_FOUND_INDEX

    return roles.findIndex(role => role.id === id)
  },
}
