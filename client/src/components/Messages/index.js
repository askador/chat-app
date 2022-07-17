import { useContext, useEffect, useRef, useState } from 'react'
import RoomIdContext from '../../contexts/room-id'
import { api, socket } from '../../api'
import Message from '../Message'
import './index.scss'

const Messages = ({userName}) => {
  const [messages, setMessages] = useState([])
  const currentRoomId = useContext(RoomIdContext)

  const messagesContainer = useRef()

  useEffect(() => {
    socket.on("newMessage", (message) => {
      setMessages((prev) => ([...prev, message]))
    })
  }, [])
  
  useEffect(() => {
    messagesContainer.current.scrollTo(0, 99999);
  }, [messages])

  useEffect(() => {
    if (currentRoomId !== undefined){ 
      socket.emit('roomClick', currentRoomId)
      api.get(`/messages?roomId=${currentRoomId}`).then(({data}) => setMessages(data))
    }

  }, [currentRoomId])

  return (
    <div className="messages" ref={messagesContainer}>
      {messages.map((message, index) => (
        <Message key={index} userName={message.userName} text={message.text} time={message.time} isMe={message.userName === userName}/>
      ))}
    </div>
  )
}

export default Messages