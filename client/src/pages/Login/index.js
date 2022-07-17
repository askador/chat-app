import { useEffect, useState } from 'react'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { socket } from '../../api'

import './index.scss'

const Login = ({onLogin}) => { 
  const [userId, setUserId] = useState()
  const [userName, setUserName] = useState('');
  const [isLoading, setLoading] = useState(false);

  const history = useHistory()

  useEffect(() => {
    socket.on('me', (id) => {
      setUserId(id)
    })
  })

  const onEnter = () => {
    if (!userName) {
      return alert('Введите свое имя');
    }
    setLoading(true)
    socket.emit('setUserName', userName)
  }

  useEffect(() => {
    socket.on('userNameTaken', (userName) => {
      alert(`Username '${userName}' is taken`)
      setLoading(false)
    })
    socket.on('userNameValid', (userName) => {
      onLogin(userId, userName)
      history.push('/rooms')
    })
  }, [])

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      onEnter()
    }
    // sendMessage()
  }

  return (
    <div className='login'>
      <input
        type="text"
        placeholder="Ваше имя"
        maxLength={16}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <Button disabled={isLoading} onClick={onEnter} variant='primary'>
        {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
      </Button>
    </div>
  )
}

export default Login