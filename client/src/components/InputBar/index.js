
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { socket } from '../../api'
import './index.scss'

const InputBar = ({userName, roomId}) => {

  const [message, setMessage] = useState("")

  const sendMessage = () => {
    // console.log("ksmdfksmdf")
    const payload = {userName: userName, text: message, roomId: roomId, time: new Date()}
    if (message.length === 0) return 
    
    socket.emit('message', payload)
    setMessage("");
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      sendMessage()
    }
  }

  return ( 
    <div className="input-bar" >
      <textarea 
        autoFocus={true}
        type="text" 
        className="message-input" 
        placeholder="Input your message..." 
        onKeyDown={onKeyDown}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <Button 
        variant='success' 
        tabIndex={0} 
        type='submit' 
        onClick={sendMessage}
      >Send</Button>
    </div>
  )
}

export default InputBar 