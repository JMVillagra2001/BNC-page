const Sequelize = require('sequelize');

const databaseName = 'bnc';

// Setup database
console.log(`Using database ${databaseName}`);

const sequelize = new Sequelize(databaseName, process.env.DATABASE_USER || 'root', process.env.DATABASE_PASS || '', {
    dialect: 'mysql',
    define: {
        underscored: true
    },
    dialectOptions:
    {
        decimalNumbers: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: true
});

sequelize.authenticate().then(() => {
    console.log('Database connection successfully established.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;