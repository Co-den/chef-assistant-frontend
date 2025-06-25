/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate(); // Navigation hook

 const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await registerUser(formData);

  if (response.token) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    window.dispatchEvent(new Event("storage")); // 🚀 Trigger Navbar update
    navigate("/"); // Redirect to home after signup
  }
};

  
  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h2 className="text-lg font-bold">Sign Up</h2>
      <input type="text" placeholder="Name" className="p-2 border rounded w-full mt-2"
        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input type="email" placeholder="Email" className="p-2 border rounded w-full mt-2"
        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input type="password" placeholder="Password" className="p-2 border rounded w-full mt-2"
        value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Sign Up
      </button>
    </div>
  );
};

export default SignupPage;
