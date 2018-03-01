// Model for user account which has an email and a password

module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
      password: DataTypes.STRING
  })
