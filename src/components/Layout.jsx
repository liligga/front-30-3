import { Outlet } from "react-router-dom"

import NavBar from "./NavBar"

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <footer>
        <span>Geeks 2023</span>
      </footer>
    </>
  )
}

export default Layout