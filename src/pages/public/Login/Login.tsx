import Card from "antd/es/card/Card"

import "./Login.css"
import { LoginForm } from "../../../components/form/LoginForm/LoginForm"

export const Login = () => {


  return (
    <div className="container__view">
      <Card className='login'>
        <img className="login__logo" src="/public/coding.png" alt="Logo coding app" />
        <h2 className='login__title'>Inicia sesión</h2>
        <LoginForm />
      </Card>
    </div>
  )
}
