const { roles } = require('../data/db')

module.exports = {
  role(usuario) {
    const sels = roles.filter(p => p.id === usuario.role_id)
    return sels ? sels[0] : null
  },
}
