import { configureStore } from "@reduxjs/toolkit";
import { tableReducer } from "../reducers/tableLayout";

export const store = configureStore({
    reducer:{
        tableReducer
    }
})