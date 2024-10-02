import UserCardList from "../../../components/cards/cards-list/UserCardList"
import { useAppSelector } from "../../../hooks/redux-hooks"
import './Users.css'

const Users = () => {
  const { users } = useAppSelector(store => store.users)

  return (
    <section className="users container">
      <h2 className="users__title title">Активные</h2>
      <hr className="users__divider"/>
      <UserCardList users={users}/>
    </section>
  )
}

export default Users