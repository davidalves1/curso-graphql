const { roles } = require('../db');

module.exports = {
  salary(user) {
    return user.real_salary;
  },
  role(user) {
    return roles.find((role) => role.id === user.role_id) || null;
  },
};
