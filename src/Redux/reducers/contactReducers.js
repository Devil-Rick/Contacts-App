import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// setting the initial state
const initialState = {
    contactList: [],
    showContact: false,
    currId: null,
}


// used to fetch all asynchronous calls regarding Api requests
export const contactThunk = createAsyncThunk(
    'contact/getInitalContacts',
    async () => {
        // using axios to handle Api requests
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contact/adddContact',
    async (user) =>{
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users', user);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
)

// Setting and creating the actions and reducers
const contactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        setShowContact: (state, action) => {
            if (action.payload === undefined) {
                state.showContact = false;
            } else {
                state.showContact = true;
                state.currId = action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(contactThunk.fulfilled, (state, action) => {
                state.contactList = [...action.payload];
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.contactList.push(action.payload);
            })
    }
});

export const contactReducer = contactSlice.reducer;

export const contactAction = contactSlice.actions;

export const contactSelector = (state) => state.contactReducer.contactList;
export const showContact = (state) => state.contactReducer.showContact;
export const currId = (state) => state.contactReducer.currId;
