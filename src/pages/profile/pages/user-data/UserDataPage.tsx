import { ReactElement } from "react";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import Loader from "../../../../components/ui/loader/Loader";
import Form from "../../components/form/Form";

const UserData = (): ReactElement => {
  const {user, status} = useAppSelector(store => store.users)
  return (
    <>
      <h1 className="profile__title title">Данные профиля</h1>
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <Form user={user} status={status}/>}
    </>
  )
}

export default UserData