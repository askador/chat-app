import { useEffect, useState} from "react"
import { useHistory } from 'react-router-dom'
import { Button } from "react-bootstrap"
import { socket, api } from "../../api"
import RoomItem from "../RoomItem"
import "./index.scss"

const RoomList = ({ onRoomChoose }) => {
  const [rooms, setRooms] = useState([])
  const [currenRoomId, setCurrentRoomId] = useState()
  const history = useHistory()


  useEffect(() => {
    api.get('/rooms').then(({data}) => setRooms(data))

    socket.on('updateRooms', (rooms) => {
      setRooms(rooms)
    })
  }, [])


  const onRoomClick = (id) => {
    setCurrentRoomId(id)
    onRoomChoose(id)
  }

  const onEnterRoom = () => {
    if (currenRoomId === undefined) return
    socket.emit('joinRoom', currenRoomId)
    history.push(`/rooms/${currenRoomId}`)
  }

  return (
    <div className="room-list">
      <div className="label">Room list</div>
      <div className="list">
        {
          rooms.length === 0 ? 
          (<div className="is-empty">Empty</div>) : 
          (rooms.map(room => (
            <RoomItem key={room.id} id={room.id} title={room.title} isActive={room.id === currenRoomId} onClick={onRoomClick}/>
          )))
        }
      </div>
      <Button onClick={onEnterRoom}>Join</Button>
    </div>
  )
}

export default RoomList
