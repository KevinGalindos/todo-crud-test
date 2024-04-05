import { BrowserRouter } from "react-router-dom"
import AuthChecker from "./routes/index.jsx"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <AuthChecker />
    </BrowserRouter>
  )
}

export default App
