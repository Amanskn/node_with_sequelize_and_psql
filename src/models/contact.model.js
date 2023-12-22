const {DataTypes } = require('sequelize');
const { sequelize } = require('../db-connection/connect-db'); // Import the sequelize instance


const Contact = sequelize.define('Contact', {
  // Model attributes are defined here
  permanentAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  currentAddress: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  // tableName:"ConNew"
});

module.exports ={
    Contact
}