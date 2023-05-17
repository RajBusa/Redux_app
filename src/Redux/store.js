import { configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterSlice from "./counterSlice";
import taskSlice from "./taskSlice";
const store = configureStore({
    reducer:  {
        count: counterSlice,
        task: taskSlice
    },
});
export default store;