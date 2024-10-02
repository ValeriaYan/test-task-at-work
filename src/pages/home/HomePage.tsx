import { ReactElement, useEffect } from "react"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { fetchUsers } from "../../store/slices/usersSlice"
import Users from "./components/ActiveUsers"
import ActiveUsers from "./components/ActiveUsers"
import ArchiveUsers from "./components/ArchiveUsers"

const HomePage = (): ReactElement => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <ActiveUsers />
      <ArchiveUsers />
    </>
  )
}

export default HomePage
