import UserCardList from "../../../components/cards/cards-list/UserCardList"
import Loader from "../../../components/loader/Loader"
import { useAppSelector } from "../../../hooks/redux-hooks"
import './Users.css'

const ActiveUsers = () => {
  const { users, status } = useAppSelector(store => store.users)
  const activeUsers = users.filter(user => user.active === true)

  return (
    <section className="users container">
      <h2 className="users__title title">Активные</h2>
      <hr className="users__divider"/>
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <UserCardList users={activeUsers}/>}
    </section>
  )
}

export default ActiveUsers