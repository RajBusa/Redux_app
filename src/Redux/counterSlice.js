import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'count',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {  
            // console.log(state.count);
            state.counter++;
        },
        decrement: (state, action) => {
            // console.log(state.count);
            state.counter--;
        }
    }
})
// console.log(counterSlice.actions)
export default counterSlice.reducer;

export const { increment, decrement } =
    counterSlice.actions;  