

import axios from "axios"

const instance = axios.create({
  baseURL: "https://dev-api.contender-logistics.draketechdev.ca/api/auth",
})

type AuthTypes = {
  email: String
  Password: String
}
export const postLogin = async (data: AuthTypes) => {
  try {
    const response = await instance.post("/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response //devuelve la respuesta
  } catch {
    (function (error: any) {
      throw error //manejo de errores
    })
  }
}