/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecipeProvider from "./context/RecipeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RecipeProvider store={store}>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </RecipeProvider>
  </BrowserRouter>
);
