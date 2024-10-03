import { ReactElement, useEffect } from "react"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { fetchUser } from "../../store/slices/usersSlice"
import arrowIcon from '/svg/arrow-left.svg'
import { Link, Outlet, useParams } from "react-router-dom"
import './ProfileLayout.css'
import Aside from "../../pages/profile/components/aside/Aside"

const ProfileLayout = (): ReactElement => {
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
        <div className="profile__content">
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default ProfileLayout
