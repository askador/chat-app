import classNames from 'classnames'


import './index.scss'

function beautifyTime(d) {
  const date = new Date(d)
  const h = (date.getHours()<10?'0':'') + date.getHours()
  const m = (date.getMinutes()<10?'0':'') + date.getMinutes()
  return h + ':' + m
}

const Message = ({userName, text, time, isMe}) => {
  return (
    <div className={classNames("message", {"is-me": isMe})}>
      <div className="bubble">
        <div className='name'>{userName}</div>
        <div className="text">
          <p>{text}</p>
        </div>
        <div className="date">{beautifyTime(time)}</div>
      </div>
    </div>
  )
}

export default Message