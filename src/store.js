import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth';
import auctionReducer from './slices/auction';

const reducer = {
  auth: authReducer,
  auction: auctionReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;