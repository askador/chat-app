import classNames from 'classnames'
import { useState } from 'react'
import './index.scss'


const RoomItem = ({id, title, isActive, onClick}) => {
  
  return (
    <div className={classNames('room-item', {
      'active': isActive,
    })}onClick={() => onClick(id)}>
      <div className='title'>• {title}</div>
    </div>
  )  
}

export default RoomItem

