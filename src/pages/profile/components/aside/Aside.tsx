import { ReactElement } from "react";
import userImg from '/img/user.jpg'
import './Aside.css'

const Aside = (): ReactElement => {
  return (
    <aside className="profile__aside aside">
      <div className="aside__img">
        <img src={userImg} alt="" />
      </div>
      <ul className="aside__nav-list">
        <li className="aside__nav-item active">Данные профиля</li>
        <li className="aside__nav-item">Рабочее пространство</li>
        <li className="aside__nav-item">Приватность</li>
        <li className="aside__nav-item">Безопасность</li>
      </ul>
    </aside>
  )
}

export default Aside