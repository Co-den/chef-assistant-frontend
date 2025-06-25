import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: [],
  reducers: {
    addDish: (state, action) => {
      state.push(action.payload);
    },
    removeDish: (state, action) => {
      return state.filter((dish) => dish.id !== action.payload);
    },
  },
});

export const { addDish, removeDish } = menuSlice.actions;
export default menuSlice.reducer;
