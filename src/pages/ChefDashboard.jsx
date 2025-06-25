/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { fetchSavedRecipes } from "../services/api";

const ChefDashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSavedRecipes()
      .then(data =>  setRecipes((data)))
      .catch(() => {
        setRecipes([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full max-w-lg p-4 mx-auto">
      <h2 className="text-lg font-bold">Chef Dashboard</h2>
      <p className="text-gray-600">Manage your saved recipes.</p>

      <div className="mt-4">
        <h3 className="font-bold text-md">Saved Recipes</h3>
        {loading ? (
          <p>Loading recipes...</p>
        ) : recipes && recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        ) : (
          <p>No saved recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default ChefDashboard;
