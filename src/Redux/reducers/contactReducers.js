import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// setting the initial state
const initialState = {
    contactList: [],
}


// used to fetch all asynchronous calls regarding Api requests
export const contactThunk = createAsyncThunk(
    'contact/getInitalContacts',
    async (_, thunkApi) => {
        // using axios to handle Api requests
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            thunkApi.dispatch(contactAction.setInitialState(res.data))
        } catch (err) {
            console.log(err);
        }
    }
); 

// Setting and creating the actions and reducers
const contactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        setInitialState : (state , action) => {
            state.contactList = [...action.payload];
        },
    },
});

export const contactReducer = contactSlice.reducer;

export const contactAction = contactSlice.actions;

export const contactSelector = (state)=>state.contactReducer.contactList;