import { useContext } from "react"
import { useNavigate } from 'react-router-dom'

import { Layout, Button, theme } from 'antd'
import { useState } from 'react'

import { AuthContext } from "../../AuthProvider/AuthProvider"//redux login(token), logout

import ModalComponent from '../../../components/Modal/ModalForm'
import TableConponent from '../../../components/Table/CrudTable'

import { useDataTable } from '../../../hooks/useDataTable'

const { Header, Content } = Layout

export const Sidebar = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { loadData, dataTable } = useDataTable()
  const { handleLogout } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleAdd = () => {
    setIsModalOpen(true)
  }

  const handleLogoutClose = () => {
    navigate("/")
    handleLogout()
  }

  return (
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button style={{
          position: 'absolute',
          right: 10,
          top: 20,
        }}
          onClick={handleLogoutClose}>
          Cerrar sesión
        </Button>
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Button style={{
          position: 'absolute',
          left: 10,
          top: 20,
        }} onClick={handleAdd}>
          Agregar tarea
        </Button>
        <ModalComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          loadData={loadData} />
        <TableConponent loadData={loadData} dataTable={dataTable} />
      </Content>
    </Layout>
  )
}