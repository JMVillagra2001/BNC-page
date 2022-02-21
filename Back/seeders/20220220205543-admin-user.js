'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      firstname: 'Juan Martin',
      lastname: 'Villagra',
      email: 'villagrajmartin@gmail.com',
      password: 'b-N-c_()_P4g3',
      is_admin: true,
      can_read: true,
      can_write: true,
      can_delete: true,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
