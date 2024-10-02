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
  const [menuOpen, setMenuOpen] = useState(false)
  
  const closeMenu = () => {
    setMenuOpen(false)
  }

  const setArchiveUser = () => {
    dispatch(archiveUser(user.id))
    closeMenu()
  }

  const setActiveUser = () => {
    dispatch(activeUser(user.id))
    closeMenu()
  }

  const setRemoveUser = () => {
    dispatch(removeUser(user.id))
    closeMenu()
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
        closeMenu={closeMenu}
        isOpen={menuOpen} 
        button={
          <button className='dropdown__btn' onClick={() => setMenuOpen(!menuOpen)}>
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