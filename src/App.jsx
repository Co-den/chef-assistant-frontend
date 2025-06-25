/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import MenuForm from "./components/MenuForm";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Registration";
import ProfilePage from "./pages/Profile";
import RecipeLookup from "./pages/RecipeLookup";
import ChefDashboard from "./pages/ChefDashboard";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/recipes" element={<RecipeLookup />} />
      <Route path="/menu" element={<MenuForm />} />
      <Route path="/dashboard" element={<ChefDashboard />} />
    </Routes>
  </>
);

export default App;
