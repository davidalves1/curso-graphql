const { roles, nextId } = require('../../data/db')
const { getRoleIndex } = require('../../services/role')

module.exports = {
  createRole(_, { name }) {
    const isRoleRegistered = roles.some(role => role.name.toLowerCase() === name.toLowerCase())

    if (isRoleRegistered) throw new Error('O perfil informado já existe')

    const role = {
      id: nextId(),
      name,
    }

    roles.push(role)
    return role
  },
  updateRole(_, { id, name }) {
    const roleIndex = getRoleIndex(id)
    console.log({ roleIndex })
    if (0 > roleIndex) return null

    const role = {
      ...roles[roleIndex],
      name,
    }

    roles.splice(roleIndex, 1, role)
    return role
  },
  deleteRole(_, { id }) {
    const roleIndex = getRoleIndex(id)
    if (0 > roleIndex) return null

    const [deletedUser] = roles.splice(roleIndex, 1)
    return deletedUser
  },
}
