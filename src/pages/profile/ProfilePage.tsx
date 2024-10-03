import { ReactElement, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { fetchUser } from "../../store/slices/usersSlice"
import arrowIcon from '/svg/arrow-left.svg'
import { Link, useParams } from "react-router-dom"
import './ProfilePage.css'
import Aside from "./components/aside/Aside"
import Form from "./components/form/Form"
import Loader from "../../components/loader/Loader"

const ProfilePage = (): ReactElement => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    id && dispatch(fetchUser(id))
  }, [dispatch])
  
  const {user, status} = useAppSelector(store => store.users)

  
  return (
    <section className="profile container">
      <Link to={"/"} className="back-btn headline">
        <img src={arrowIcon} alt="" />
        <p>Назад</p>
      </Link>
      <div className="profile__body">
        <Aside />
        <div className="profile__content">
          <h1 className="profile__title title">Данные профиля</h1>
          {status === 'loading' && <Loader />}
          {status === 'resolved' && <Form user={user} status={status}/>}
        </div>
      </div>
    </section>
  )
}

export default ProfilePage