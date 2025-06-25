/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomAlert from "../components/Alert";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";  // Import SearchBar
import { fetchRecipe } from "../services/api";

const RecipeLookup = () => {
  const [dishName, setDishName] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [alert, setAlert] = useState(null);

  const getRecipe = async () => {
    const data = await fetchRecipe(dishName);
    setRecipe(data);
  };

  return (
    <div className="w-full max-w-lg p-4 mx-auto">
      {alert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl px-4">
          <CustomAlert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        </div>
      )}
      <h2 className="mb-4 text-lg font-bold">Find a Recipe</h2>
      
      {/* Use SearchBar Component */}
      <SearchBar 
        value={dishName} 
        onChange={setDishName} 
        onSearch={getRecipe} 
        placeholder="Enter dish name..."
      />

      {recipe && <RecipeCard recipe={recipe} setAlert={setAlert} />}
    </div>
  );
};

export default RecipeLookup;
