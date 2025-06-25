/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import MenuCard from "../components/MenuCard";
import { fetchMenu, fetchRecipe, deleteDish } from "../services/api";

const MenuPlanner = () => {
  const [menu, setMenu] = useState([]);
  const [dishName, setDishName] = useState("");
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    fetchMenu().then((data) => setMenu(data || []));
  }, []);

  const getRecipeDetails = async (name) => {
    try {
      const recipe = await fetchRecipe(name);
      setRecipeDetails(recipe);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  const removeDish = async (id) => {
    await deleteDish(id);
    fetchMenu().then((data) => setMenu(data || []));
  };

  return (
    <div className="w-full max-w-lg p-4 mx-auto">
      <h2 className="mb-4 text-lg font-bold">Plan Your Full Menu</h2>

      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Enter dish..."
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
      />
      <button
        className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
        onClick={() => getRecipeDetails(dishName)}
      >
        Get Recipe
      </button>

      {recipeDetails && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <h3 className="text-lg font-bold">{recipeDetails.name}</h3>
          <p><strong>Ingredients:</strong> {recipeDetails.ingredients}</p>
          <p><strong>Preparation:</strong> {recipeDetails.steps}</p>
        </div>
      )}

      <div className="mt-4">
        {menu.length > 0 ? (
          menu.map((dish, index) => (
            <MenuCard key={index} dish={dish} onDelete={() => removeDish(dish._id)} />
          ))
        ) : (
          <p>No menu items yet.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPlanner;
