import { useContext } from "react"
import { Button, Form, Input, Space, notification } from "antd"

import { AuthContext } from "../../../layouts/AuthProvider/AuthProvider.js" //redux login(token), logout

import { postLogin } from "../../../services/Axios/ApiAuth/index.js"

import "./LoginForm.css"

const { Item } = Form
const { Password } = Input

type AuthTypes = {
  email: String
  Password: String
}


export const LoginForm = () => {
  const { handleLogin } = useContext(AuthContext)
  const [api, contextHolder] = notification.useNotification()


  const onFinish = async (values: AuthTypes) => {
    const postApi = await postLogin(values)
    if (postApi?.status == 200) {

      handleLogin(postApi.data.token)

    } else {
      api["error"]({
        message: 'Credenciales invalidas',
        description:
          'Error al digitar sus credenciales ',
      })
    }
  }
  return (<div>
    {contextHolder}
    <Form onFinish={onFinish} layout="vertical" className="login-form">
      <Item
        name="email"
        rules={[
          { required: true },
          { type: "email", message: "Correo no valido" },
        ]}
      >
        <Input placeholder="Correo Electrónico" />
      </Item>
      <Item name="password" rules={[{ required: true }]}>
        <Password placeholder="Contraseña" />
      </Item>
      <Space className="button-box">
        <Button className="login-button" type="primary" htmlType="submit" block>
          Iniciar Sesión
        </Button>
      </Space>
    </Form>
  </div>
  )
}
