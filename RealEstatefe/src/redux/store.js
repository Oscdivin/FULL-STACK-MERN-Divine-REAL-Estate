import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  useReducer  from './user/userSlice.jsx'
import {persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: useReducer})

const persistConfig = {
  key : "root",
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  // reducer: {user: useReducer},
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persstor = persistStore(store)