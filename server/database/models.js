/*
room {
  id,
  title, 
  users: []
  messages: []
}
message {
  id?,
  text,
  user,
  roomId,
  time
}
*/
const rooms = []


/* 
user {
  id,
  name
}
*/
const users = []


module.exports = {rooms, users}