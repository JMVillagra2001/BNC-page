const db = require('../helpers/sequelize');
const Sequelize = require('sequelize');
const House = require('./House');

const Development = db.define('developments', {
    name: {
        type: Sequelize.STRING
    },
    ubication: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    }
}, {
    paranoid: true,
});
 
/*
Development.hasMany(House, {
    foreignKey: 'developmentId',
    onDelete: 'CASCADE'
});*/

module.exports = Development;