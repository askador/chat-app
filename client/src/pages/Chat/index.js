import { Conversation, InputBar, ChatSidebar } from "../../components"
import { useParams } from "react-router-dom"

import "./index.scss"
import RoomIdContext from "../../contexts/room-id"

const Chat = ({userName}) => {
  const { id: roomId } = useParams()

  return (
    <div className="container">
      <div className="chat">
        <RoomIdContext.Provider value={roomId}>
          <Conversation userName={userName} roomId={roomId}/>
        </RoomIdContext.Provider>
        <InputBar userName={userName} roomId={roomId}/>
      </div>
      <ChatSidebar userName={userName} roomId={roomId}/>
    </div>
  )
}

export default Chat
