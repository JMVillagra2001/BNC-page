const db = require('../helpers/sequelize');
const Sequelize = require('sequelize');

const User = db.define('users', {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    isAdmin: {
        type: Sequelize.BOOLEAN
    },
    canRead: {
        type: Sequelize.BOOLEAN
    },
    canWrite: {
        type: Sequelize.BOOLEAN
    },
    canDelete: {
        type: Sequelize.BOOLEAN
    },
}, {
    paranoid: true,
});

module.exports = User;