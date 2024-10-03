import { ReactElement } from "react";
import userImg from '/img/user.jpg'
import './Aside.css'
import { Link, useLocation, useParams } from "react-router-dom";


const Aside = (): ReactElement => {
  const { id } = useParams()
  const location = useLocation()

  return (
    <aside className="profile__aside aside">
      <div className="aside__img">
        <img src={userImg} alt="" />
      </div>
      <ul className="aside__nav-list">
        <li className="aside__nav-item">
          <Link to={`/profile/${id}/data`} className={`aside__link ${location.pathname.indexOf(`/profile/${id}/data`) !== -1  && 'active'}`}>Данные профиля</Link>
        </li>
        <li className="aside__nav-item">
          <Link to={`/profile/${id}/work-space`} className={`aside__link ${location.pathname.indexOf(`/profile/${id}/work-space`) !== -1  && 'active'}`}>Рабочее пространство</Link>
        </li>
        <li className="aside__nav-item">
          <Link to={`/profile/${id}/privacy`} className={`aside__link ${location.pathname.indexOf(`/profile/${id}/privacy`) !== -1  && 'active'}`}>Приватность</Link>
        </li>
        <li className="aside__nav-item">
          <Link to={`/profile/${id}/security`} className={`aside__link ${location.pathname.indexOf(`/profile/${id}/security`) !== -1  && 'active'}`}>Безопасность</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Aside