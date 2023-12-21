const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('test_db', 'postgres', 'password', {
    host: 'localhost',
    dialect:  'postgresql',
    logging: false, // Add this line to disable logging
  });

    async function connectDb(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully with postgreSQL on host :-',sequelize.config.host);
      } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        process.exit(1);
      }

  }

  module.exports = {
    connectDb
  }