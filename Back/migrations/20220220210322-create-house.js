'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('houses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ubication: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      mts: {
        type: Sequelize.INTEGER
      },
      rooms: {
        type: Sequelize.INTEGER
      },
      baths: {
        type: Sequelize.INTEGER
      },
      tokens: {
        type: Sequelize.INTEGER
      },
      development_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'developments',
          key: 'id',
          as: 'developmentId'
        },
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Houses');
  }
};