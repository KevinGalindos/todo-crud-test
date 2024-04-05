import { useContext } from "react"

//Redux para autenticar
import { AuthContext } from "../layouts/AuthProvider/AuthProvider.js"

//vistas publicas y privadas
import HandleRoutesPublic from "./Public"
import HandleRoutesPrivates from "./Private"

const AuthChecker = () => {
  const { isAuthenticated } = useContext(AuthContext)

  const token = isAuthenticated


  return token ? <HandleRoutesPrivates /> : <HandleRoutesPublic />
}

export default AuthChecker
