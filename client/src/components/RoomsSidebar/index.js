import RoomList from "../RoomList"
import { Button } from "react-bootstrap"
import { socket } from "../../api"

import "./index.scss"
import { useEffect, useState } from "react"

const RoomsSidebar = ({ onRoomChoose }) => {
  const [createRoomTitle, setCreateRoomTitle] = useState("")

  const onCreateRoomTitleChange = (e) => {
    const title = e.target.value
    setCreateRoomTitle(title)
  }

  const onCreateRoom = () => {
    if (createRoomTitle.length > 16) {
      alert('Max room title length is 16 characters')
      return
    }

    if (createRoomTitle.length === 0) return
    
    socket.emit("createRoom", createRoomTitle)
    setCreateRoomTitle("")
  }

  useEffect(() => {
    socket.on('roomExists', title => {
      alert(`Room with title '${title}' already exists`)
    })
  }, [])

  return (
    <div className="rooms-sidebar">
      <div className="create-room">
        <input
          type="text"
          placeholder="Название комнаты"
          value={createRoomTitle}
          onChange={onCreateRoomTitleChange}
          maxLength={16}
        />
        <Button variant="success" onClick={onCreateRoom}>
          Создать комнату
        </Button>
      </div>
      <RoomList onRoomChoose={onRoomChoose} />
    </div>
  )
}

export default RoomsSidebar
