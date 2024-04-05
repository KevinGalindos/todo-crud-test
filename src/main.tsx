
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
//use redux store;
import store from "./store/store.js"
// authProvider autntication
import AuthProvider from "./layouts/AuthProvider/AuthProvider.js"

import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
)
