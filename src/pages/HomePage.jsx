/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if not registered
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to <span className="text-green-500">Chef Assistant</span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">Cook smarter, faster, and better with real-time recipes.</p>
      </div>

      {/* Features Section */}
      <div className="grid max-w-5xl grid-cols-1 gap-6 px-6 mt-12 md:grid-cols-2">
        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">AI Recipe Generator</h2>
          <p className="mt-2 text-gray-600">Instantly find recipes for any dish, even if you've never cooked it before.</p>
        </div>
        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Menu Planning</h2>
          <p className="mt-2 text-gray-600">Create dynamic menus tailored to customer requests and ingredient availability.</p>
        </div>
        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Video Tutorials</h2>
          <p className="mt-2 text-gray-600">Watch expert chefs prepare meals, step by step, with visual guides.</p>
        </div>
        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Ingredient Substitutions</h2>
          <p className="mt-2 text-gray-600">Find alternatives when ingredients aren't available.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-6 mt-12 text-center bg-gray-200">
        <p className="text-gray-600">© 2025 Chef Assistant. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
