import { configureStore } from '@reduxjs/toolkit'
import { togglerSlice } from '../redux/sideSlice'
import { authApi } from '../redux/api/authApi'
import authSlice from '../redux/authSlice'
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    side: togglerSlice.reducer,
    authSlice: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})