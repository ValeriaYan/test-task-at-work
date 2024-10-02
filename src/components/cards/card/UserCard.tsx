import { IUser } from '../../../types/IUser'
import userImg from '/img/user.jpg'
import menuIcon from '/svg/dropdown-button.svg'
import './UserCard.css'
import { ReactElement, useState } from 'react'
import Dropdown from '../../ui/dropdown/Dropdown'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { activeUser, archiveUser, removeUser } from '../../../store/slices/usersSlice'

interface UserCardProps {
  user: IUser
}

const UserCard = ({ user }: UserCardProps): ReactElement => {
  const dispatch = useAppDispatch()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  const setArchiveUser = () => {
    dispatch(archiveUser(user.id))
    setDropdownOpen(false)
  }

  const setActiveUser = () => {
    dispatch(activeUser(user.id))
    setDropdownOpen(false)
  }

  const setRemoveUser = () => {
    dispatch(removeUser(user.id))
    setDropdownOpen(false)
  }

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
      <Dropdown 
        open={dropdownOpen} 
        button={
          <button className='dropdown__btn' onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={menuIcon} alt="" />
          </button>}
        menu={user.active ? [
          <button>Редактировать</button>,
          <button onClick={setArchiveUser}>Архивировать</button>,
          <button onClick={setRemoveUser}>Скрыть</button>
        ]: [
          <button onClick={(setActiveUser)}>Активировать</button>
        ]}/>
    </div>
  )
}

export default UserCard