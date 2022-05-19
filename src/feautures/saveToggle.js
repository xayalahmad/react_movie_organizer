import { createSlice } from "@reduxjs/toolkit";

export const saveSlice = createSlice({
  name: "saveToggle",
  initialState: false,
  reducers: {
    setDisable: (state, action) => {
      state = true;
      return state;
    },
  },
});

export const selectID = (state) => state.save;

export const { setDisable } = saveSlice.actions;

export default saveSlice.reducer;
