import { useEffect, useState } from "react"
import UserItem from "../UserItem"
import { api, socket } from "../../api"
import "./index.scss"

const UserList = ({roomId}) => {

  const[users, setUsers] = useState([])

  useEffect(() => {
    api.get(`/users?roomId=${roomId}`).then(({data}) => setUsers(data))

    socket.on('updateUsers', (users) => {
      setUsers(users)
    })
  }, [])

  return (
    <div className="user-list">
      <div className="label">Participants</div>
      <div className="users">
        {users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    </div>
  )
}

export default UserList
