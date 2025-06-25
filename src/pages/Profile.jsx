/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { fetchUserProfile } from "../services/api";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect if user is not authenticated
      return;
    }

    fetchUserProfile().then(setUser);
  }, [navigate]);

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h2 className="text-lg font-bold">Chef Profile</h2>
      {user ? (
        <div className="bg-white shadow-md p-4 rounded">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default ProfilePage;
