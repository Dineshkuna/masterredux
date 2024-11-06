import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/component/others/CounterSlice'



export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})