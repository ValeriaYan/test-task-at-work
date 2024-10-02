import { ReactElement, useEffect } from "react"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { fetchUser } from "../../store/slices/usersSlice"
import arrowIcon from '/svg/arrow-left.svg'
import { Link, useParams } from "react-router-dom"
import './ProfilePage.css'
import Aside from "./components/aside/Aside"

const ProfilePage = (): ReactElement => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    id && dispatch(fetchUser(id))
  }, [dispatch])
  
  return (
    <section className="profile container">
      <Link to={"/"} className="back-btn headline">
        <img src={arrowIcon} alt="" />
        <p>Назад</p>
      </Link>
      <div className="profile__body">
        <Aside />
      </div>
    </section>
  )
}

export default ProfilePage