import UserCardList from "../../../components/cards/cards-list/UserCardList"
import { useAppSelector } from "../../../hooks/redux-hooks"
import './Users.css'

const ActiveUsers = () => {
  const { users } = useAppSelector(store => store.users)
  const archiveUsers = users.filter(user => user.active === false)

  return (
    <section className="users container">
      <h2 className="users__title title">Архив</h2>
      <hr className="users__divider"/>
      <UserCardList users={archiveUsers}/>
    </section>
  )
}

export default ActiveUsers