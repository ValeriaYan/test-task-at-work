import { ReactElement } from "react"
import logo from '/img/logo.png'
import userImg from '/img/user.jpg'
import heartIcon from '/svg/heart.svg'
import notificationIcon from '/svg/notification.svg'
import './Header.css'
import { Link } from "react-router-dom"

const Header = (): ReactElement => {
  return (
    <div className="header">
      <div className="header__body container">
        <div className="header__logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
        </div>
        <ul className="header__nav nav">
          <li className="nav__item item">
            <img src={heartIcon} alt="" width={16} height={16}/>
          </li>
          <li className="nav__item item">
            <img src={notificationIcon} alt="" width={16} height={16}/>
          </li>
          <li className="nav__item item item_user">
            <div className="item__img">
              <img src={userImg} alt="" />
            </div>
            <p className="item__text">Ivan1234</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header