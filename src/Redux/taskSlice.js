import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTask = createAsyncThunk("fetchTask", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/list');
    return response.data;
})

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: []
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            // console.log("extraReducers")
            console.log(action.payload);
            state.task = action.payload;
        });
    }
})
// console.log(taskSlice.actions)
export default taskSlice.reducer;

export const { } =
    taskSlice.actions;  