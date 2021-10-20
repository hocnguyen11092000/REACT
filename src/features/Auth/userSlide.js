import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import StorageKeys from 'constants/storage-keys';
import userApi from './../../api/userApi';

export const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    const data = await userApi.register(payload)

    localStorage.setItem(StorageKeys.TOKEN, data.access_token)
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

    return data.user
  }
)

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    const data = await userApi.login(payload)

    localStorage.setItem(StorageKeys.TOKEN, data.access_token)
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

    return data.user
  }
)

const userSlide = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.USER)
      localStorage.removeItem(StorageKeys.TOKEN)
      state.current = {}
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload
    }
  }
})
const { actions, reducer } = userSlide
export const { logout } = actions
export default reducer