const Sequelize = require('sequelize');
const sequelize = require('../util/dataBase');

const PersonData = sequelize.define('personData', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  personName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  personEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  personContact: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = PersonData;