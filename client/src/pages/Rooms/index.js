import { useEffect, useState } from 'react'
import { Conversation, RoomsSidebar } from '../../components'
import RoomIdContext from '../../contexts/room-id'
import './index.scss'

const Rooms = ({userName}) => {

  const [currentRoomId, setCurrentRoomId] = useState()

  const onRoomChoose = (id) => {
    setCurrentRoomId(id) 
  }

  useEffect(() => {
    // change conversation messages
  }, [currentRoomId])


  return (
    <div className="rooms">
      <RoomIdContext.Provider value={currentRoomId}>
        <Conversation userName={userName}/>
        <RoomsSidebar onRoomChoose={onRoomChoose}/>
      </RoomIdContext.Provider>
    </div>
  )
}

export default Rooms