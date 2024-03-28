import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    async (user) => {
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users', user);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
)

export const updateContactThunk = createAsyncThunk(
    'contact/updateContact',
    async (inData) => {
        try {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${inData.id}`, {
                name: inData.name,
                email: inData.email,
                phone: inData.phone,
                address: { city: inData.city, },
            });
            return { data: res.data };
        } catch (err) {
            console.log(err);
        }
    }
);

export const removeContactThunk = createAsyncThunk(
    'contact/removeContact',
    async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            return id;
        } catch (err) {
            console.log(err);
        }
    }
);