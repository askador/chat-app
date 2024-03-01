import Messages from "../Messages"

import './index.scss'

const Conversation = ({userName}) => {

  return (
    <div className="conversation">
      <div className="label">Conversation</div>
      <Messages userName={userName}/>
    </div>
  )
}

export default Conversation 