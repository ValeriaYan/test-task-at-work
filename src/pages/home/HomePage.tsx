import { ReactElement, useEffect } from "react"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { fetchUsers } from "../../store/slices/usersSlice"
import Users from "./components/Users"

const HomePage = (): ReactElement => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <Users />
    </>
  )
}

export default HomePage
