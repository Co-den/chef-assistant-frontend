/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { saveRecipe } from "../services/api";


const RecipeCard = ({ recipe, setAlert }) => {

  const handleSave = async () => {
    try {
      const response = await saveRecipe(recipe);
      setAlert({ type: "success", message: response.message || "Recipe saved!" });
    } catch (error) {
      setAlert({ type: "error", message: "Failed to save recipe." });
    }
  };

  if (!recipe || !recipe.ingredients) {
    return <p>No ingredients available for this recipe.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row bg-white border rounded shadow mt-4 overflow-hidden">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Details */}
      <div className="p-4 md:w-1/2 w-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">{recipe.name}</h3>

          <h4 className="font-semibold">Ingredients:</h4>
          <ul className="list-disc list-inside mb-2">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>

          <h4 className="font-semibold mt-2">Preparation Steps:</h4>
          <p className="text-gray-700 whitespace-pre-line">{recipe.steps}</p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-4">
          {recipe.video && (
            <a
              href={recipe.video}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              🎥 Watch Tutorial
            </a>
          )}
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            💾 Save Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
