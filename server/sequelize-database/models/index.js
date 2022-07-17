const User = require('./User')
const Message = require('./Message')
const Conversation = require('./Conversation')

async function associate() {
    User.hasMany(Message, {
        foreignKey: 'from',
        as: 'Messages'
    })
    Conversation.hasMany(Message, {
        foreignKey: 'conversationId', 
        as: 'Messages'
    })
    // Message.belongsTo(User, {
    //     targetKey: 'id', 
    //     foreignKey: 'from', 
    //     as: "User"
    // }),
    // Message.belongsTo(Conversation, {
    //     targetKey: 'id',
    //     foreignKey: 'conversation', 
    //     as: "Conversation"
    // })
}

module.exports = {
    User, 
    Message, 
    Conversation,
    associate
}