import { IUser } from '../../../types/IUser'
import userImg from '/img/user.jpg'
import './UserCard.css'

interface UserCardProps {
  user: IUser
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className={`user-card ${!user.active ? 'archive': ''}`}>
      <div className="user-card__body">
        <div className="user-card__img">
          <img src={userImg} alt="" />
        </div>
        <div className="user-card__info">
          <div className="user-card__name headline">{user.username}</div>
          <div className="user-card__company text-small">{user.company.name}</div>
          <div className="user-card__city caption">{user.address.city}</div>
        </div>
      </div>
    </div>
  )
}

export default UserCard