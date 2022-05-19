import {createSlice} from '@reduxjs/toolkit'

export const listSlice = createSlice({
    name: "favs",
    initialState: [],
    reducers: {
        addMovie: (state, action) => {
            const newItem = {
                id: action.payload.id,
                title: action.payload.title,
                year: action.payload.year,
                poster: action.payload.poster
            }
            if(state.every(f => f.id !== newItem.id)) {
                state.push(newItem);
            }
        },

        removeMovie: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
    },

});

export const selectFavs = (state) => state.favs;

export const {addMovie, removeMovie} = listSlice.actions;

export default listSlice.reducer;
