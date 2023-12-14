const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('auth', 'root', 'root1234', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('database connected')
} catch(error) {
    console.log('not connected', error)
}

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('../models').user (sequelize, DataTypes)

db.sequelize.sync({force: false})


module.exports = db