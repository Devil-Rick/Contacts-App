import { createSlice } from "@reduxjs/toolkit";
import { contactThunk, addContactThunk, removeContactThunk, updateContactThunk } from "../thunk/thunk";

// setting the initial state
const initialState = {
    contactList: [],
    showContact: false,
    currId: null,
}

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
                state.currId = action.payload.index;
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
            }).addCase(updateContactThunk.fulfilled, (state, action) => {
                const updateArr = state.contactList.map((contact) => {
                    if (contact.id === action.payload.data.id) { return (action.payload.data) }
                    return contact;
                })
                state.contactList = updateArr;
            })
            .addCase(removeContactThunk.fulfilled, (state, action) => {
                const arr = state.contactList.filter(e => e.id !== action.payload);
                state.contactList = arr;
                if (state.contactList.length === state.currId) {
                    state.currId = 0;
                }
            })
    }
});

export const contactReducer = contactSlice.reducer;

export const contactAction = contactSlice.actions;

export const contactSelector = (state) => state.contactReducer.contactList;
export const showContact = (state) => state.contactReducer.showContact;
export const currId = (state) => state.contactReducer.currId;
