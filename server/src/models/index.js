// To connect to Database which is going to load certain configurations which are in config.js

const fs = require('fs')
const path = require('path')
const Sequilize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequilize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequilize = Sequilize

module.exports = db
