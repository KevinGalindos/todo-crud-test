import axios from "axios"


const baseUrl = "https://crudcrud.com/api/edbf06ba023a4ac69a1e5da06f3a444e"


const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Permitir todos los orígenes
  },
})

export const getAll = async () => instance.get("/all")

export const getTaskByIdAPI = async (id: number) =>
  instance.get(`/all/${id}`)

export const createAll = async (data: any) =>
  instance.post(`/all`, JSON.stringify(data))

export const updateAll = async (data: any, id: string) =>
  instance.put(`/all/${id}`, data)

export const deleteAll = async (id: any) =>
  instance.delete(`/all/${id}`)
