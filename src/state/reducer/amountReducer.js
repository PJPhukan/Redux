import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 10000
}

export const amountReducer = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        deposite: (state, action) => {
            state.value = state.value + action.payload;
        },
        withdraw: (state, action) => {
            state.value = state.value - action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { deposite, withdraw } = amountReducer.actions

export default amountReducer.reducer