const Sequelize = require('sequelize');
const sequelize = new Sequelize('project-on-appointment', 'root', '1234',
  {
    dialect: 'mysql',
    host: 'localhost'
  })

module.exports = sequelize;