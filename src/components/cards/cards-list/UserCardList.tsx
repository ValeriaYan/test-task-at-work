import { IUser } from "../../../types/IUser"
import UserCard from "../card/UserCard"
import './UserCardList.css'

interface UserCardListProps {
  users: IUser[]
}

const UserCardList = ({ users }: UserCardListProps) => {
  return (
    <div className="users__list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserCardList