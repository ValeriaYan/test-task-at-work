import { ReactElement } from "react"
import Header from "../header/Header"
import { Outlet } from "react-router-dom"

const Layout = (): ReactElement => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout