import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import recipeReducer from "../slices/recipeSlice";
import menuReducer from "../slices/menuSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipeReducer,
    menu: menuReducer,
  },
});

export default store;
