const db = require('../helpers/sequelize');
const Sequelize = require('sequelize');

const House = db.define('houses', {
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
    developmentId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: 'Developments',
            key: 'id',
            as: 'developmentId'
        },
    },
}, {
    paranoid: true,
});

/*House.belongsTo(require('./Development'), {
    foreignKey: 'developmentId',
    onDelete: 'CASCADE'
});*/



module.exports = House;