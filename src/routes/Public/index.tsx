import { Routes, Route, Outlet } from "react-router-dom"

import { Login } from "../../pages/public/Login/Login"


const HandleRoutesPublic = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="*" element={<Outlet />} />
    </Routes>
  )
}

export default HandleRoutesPublic
