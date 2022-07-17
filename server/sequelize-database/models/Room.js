const sequelize = require('../connection')
const {DataTypes} = require('sequelize')

const Room = sequelize.define(
  'rooms',
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true
    }
  },
  {
    timestamps: false
  }
)

module.exports = Room