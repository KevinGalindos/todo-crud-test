import React, { createContext, useEffect, ReactNode } from "react"
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from "../../services/Auth/authSlice"


interface AuthContextProps {
  isAuthenticated: boolean
  handleLogin: (token: string) => void
  handleLogout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  handleLogin: () => { },
  handleLogout: () => { },
})

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        dispatch(login(token))
      } else {
        dispatch(logout())
      }
    }

    initializeAuth()
  }, [dispatch])

  const handleLogin = (token: string) => {
    dispatch(login(token))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
