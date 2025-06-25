/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { fetchSavedRecipes, createMenu } from "../services/api";

const CreateMenuForm = () => {
  const [title, setTitle] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetchSavedRecipes().then(setRecipes);
  }, []);

  const handleCheckbox = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createMenu({ title, recipeIds: selectedIds });
    alert(response.message);
    setTitle("");
    setSelectedIds([]);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Create New Menu</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Menu Title"
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <h4 className="font-semibold mb-2">Select Recipes:</h4>
      {recipes.map((r) => (
        <label key={r._id} className="block">
          <input
            type="checkbox"
            checked={selectedIds.includes(r._id)}
            onChange={() => handleCheckbox(r._id)}
            className="mr-2"
          />
          {r.name}
        </label>
      ))}

      <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        📋 Save Menu
      </button>
    </form>
  );
};

export default CreateMenuForm;
