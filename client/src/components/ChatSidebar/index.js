import { Button } from 'react-bootstrap'
import UserList from '../UserList'
import { useHistory } from 'react-router-dom'
import './index.scss'
import { socket } from '../../api'


const ChatSidebar = ({userName, roomId}) => {

  const history = useHistory()

  const onLeave = () => {
    socket.emit('leaveRoom', roomId)
    history.push('/rooms')
  }

  return (
    <div className='chat-sidebar'>
      <div className='current-user'>
        <div className='filler'>Вы вошли под пользователем</div>
        <div className='name'>{userName}</div>
      </div>
      <UserList roomId={roomId}/>
      <Button variant='danger' onClick={onLeave}>Выйти</Button>
    </div>
  )  
}

export default ChatSidebar

