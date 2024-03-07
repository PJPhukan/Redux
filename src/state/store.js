import { configureStore } from '@reduxjs/toolkit'
import amountReducer from './reducer/amountReducer'
export const store = configureStore({
    reducer: {
        amount: amountReducer,
    },
})