import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../reducers/contactReducers";

export const store = configureStore({
    reducer : {
        contactReducer
    }
});

