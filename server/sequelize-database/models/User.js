const sequelize = require('../connection')
const {DataTypes} = require('sequelize')

const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(64).BINARY,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = User