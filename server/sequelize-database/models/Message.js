const sequelize = require('../connection')
const {DataTypes} = require('sequelize')

const Message = sequelize.define(
  'messages',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    from: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    roomId: {
      type: DataTypes.STRING(36),  
      allowNull: false
    },
    time: {
      type: DataTypes.TIME
    }
  },
  {
    createdAt: 'time',
    updatedAt: false
  }
)

module.exports = Message