import './index.scss'

const UserItem = ({user}) => {
  return (
    <div className="user-item">
      <div className="name">• {user.name}</div>
    </div>
  )
}

export default UserItem