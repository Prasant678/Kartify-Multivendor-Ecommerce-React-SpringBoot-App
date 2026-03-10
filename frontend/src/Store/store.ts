import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import sellerSlice from './Seller/sellerSlice'
import sellerProductSlice from './Seller/sellerProductSlice'
import productSlice from './Customer/productSlice'
import authSlice from './authSlice'
import cartSlice from './Customer/cartSlice'
import couponSlice from './Customer/couponSlice'
import orderSlice from './Customer/orderSlice'

const rootReducer = combineReducers({
    seller: sellerSlice,
    sellerProduct: sellerProductSlice,
    product: productSlice,
    auth: authSlice,
    cart: cartSlice,
    coupon: couponSlice,
    order: orderSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState>=useSelector;