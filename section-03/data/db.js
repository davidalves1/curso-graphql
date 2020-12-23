let id = 1
function nextId() {
  return id++
}

const roles = [
  { id: 1, name: 'comum' },
  { id: 2, name: 'administrador' },
]

const users = [
  {
    id: nextId(),
    name: 'João Silva',
    email: 'jsilva@zemail.com',
    age: 29,
    role_id: 1,
    status: 'ATIVO',
  },
  {
    id: nextId(),
    name: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    age: 31,
    role_id: 2,
    status: 'INATIVO',
  },
  {
    id: nextId(),
    name: 'Daniela Smith',
    email: 'danismi@umail.com',
    age: 24,
    role_id: 1,
    status: 'BLOQUEADO',
  },
]

module.exports = { users, roles, nextId }
