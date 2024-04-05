import {configureStore } from "@reduxjs/toolkit"
import authReducer  from '../services/Auth/authSlice';
/* import userReducer  from '../services/auth/userSlice' */

const rootReducer = {
    auth: authReducer,
    /* user: userReducer, */
  };

const store=configureStore({
    reducer:rootReducer
})

export default store;