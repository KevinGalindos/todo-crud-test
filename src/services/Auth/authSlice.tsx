
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};




const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    login: (state,action:PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload; // Guarda el token proporcionado en el payload
      // Guarda el token en localStorage
      localStorage.setItem("token", action.payload)
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.token = null // Borra el token cuando el usuario cierra sesión
      // Remueve el token del localStorage al cerrar sesión
      localStorage.removeItem("token")
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer