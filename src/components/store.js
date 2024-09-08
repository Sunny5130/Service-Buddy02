import { configureStore } from '@reduxjs/toolkit'
import UserLoginSlice from './user'

export default configureStore({
  reducer: {
    user : UserLoginSlice
  },
})