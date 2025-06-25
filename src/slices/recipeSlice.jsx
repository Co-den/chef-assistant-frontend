import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: [],
  reducers: {
    setRecipes: (state, action) => action.payload,
  },
});

export const { setRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
