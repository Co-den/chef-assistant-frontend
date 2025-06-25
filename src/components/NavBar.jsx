/* eslint-disable no-unused-vars */ import React, {
  useState,
  useEffect,
} from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userName, setUserName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateAuthStatus = () => {
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("user");

      setIsLoggedIn(!!token);
      if (userData && userData !== "undefined") {
        try {
          const user = JSON.parse(userData);
          setUserName(user?.name || "");
        } catch (error) {
          console.error("Error parsing user JSON:", error);
          setUserName("");
        }
      } else {
        setUserName("");
      }
    };

    updateAuthStatus();
    window.addEventListener("storage", updateAuthStatus);
    return () => window.removeEventListener("storage", updateAuthStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-green-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          👨‍🍳Chef Assistant
        </Link>

        {/* Burger Menu Button */}
        <button className="md:hidden text-white bg-green-500 text-xl" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-6 bg-green-500 items-center ${
            menuOpen ? "block" : "hidden"
          } absolute top-16 right-0 w-full p-4 md:relative md:top-auto md:right-auto md:w-auto md:p-0`}
        >
          {isLoggedIn ? (
            <>
              <Link to="/recipes" className="text-white bg-green-500 block md:inline-block">
                Recipes
              </Link>
              <Link to="/menu" className="text-white bg-green-500 block md:inline-block">
                Menu Planner
              </Link>
              <Link
                to="/dashboard"
                className="text-white bg-green-500 block md:inline-block"
              >
                Dashboard
              </Link>
              <Link to="/profile" className="text-white bg-green-500 block md:inline-block">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 bg-green-500 block md:inline-block"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-500 px-4 py-2 rounded block md:inline-block"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-700 text-white px-4 py-2 rounded block md:inline-block"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
