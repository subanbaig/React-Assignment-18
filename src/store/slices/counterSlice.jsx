import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        addCounter:(state , action)=>{
            state.counter = ++state.counter
            // console.log('Add Counter Value')
        },
        minusCounter:(state , action)=>{
            state.counter = state.counter > 0 ? --state.counter : 0
            // console.log('Sub Counter Value')
        },
    }
})

const {actions, reducer } = counterSlice

export const {addCounter , minusCounter} = actions;

export default reducer
