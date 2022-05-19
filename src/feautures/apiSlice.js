import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "apiId",
  initialState: "",
  reducers: {
    addFavID: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectID = (state) => state.apiID;

export const { addFavID } = apiSlice.actions;

export default apiSlice.reducer;
