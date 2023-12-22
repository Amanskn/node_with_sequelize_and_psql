const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db-connection/connect-db"); // Import the sequelize instance

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Maddhesia",
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
    // tableName: 'UsersNew', // Explicitly set the table name
    // timestamps:false
    // createdAt:false,
    // updatedAt:"u_a_tas"
  }
);

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true

module.exports = {
  User, // Exporting models for use in other parts of the application
};
