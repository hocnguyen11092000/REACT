import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice'
import userReducer from '../features/Auth/userSlide'
const rootReducer = { // giống như root state
  counter: counterReducer,
  user: userReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store