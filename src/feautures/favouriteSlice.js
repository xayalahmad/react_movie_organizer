import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const saveAsync = createAsyncThunk(
    'favourite/save',
    async (request) => {
        const response = await api.save(request);
        localStorage.setItem("ID", response.id);
        return response.id;
    }
)

const favSlice = createSlice({
    name: 'favourite',
    initialState: {
        id: ''
    },
    reducers: {
        init: (state) => {
            state.id = localStorage.getItem('ID') || '';
        }
    }
});

export const selectID = (state) => state.favourite.id;
export const { init } = favSlice.actions;

export default favSlice.reducer;
