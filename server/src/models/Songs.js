module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define('Song', {
     email: {
       type: DataTypes.STRING,
       unique: true
     },
     password: DataTypes.STRING
  })

  return Song
}
