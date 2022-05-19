import { createSlice } from "@reduxjs/toolkit";

export const lisNameSlice = createSlice({
  name: "listName",
  initialState: "",
  reducers: {
    addFavListName: (state, action) => {
        console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});

export const selectFavName = (state) => state.listName;

export const { addFavListName } = lisNameSlice.actions;

export default lisNameSlice.reducer;
