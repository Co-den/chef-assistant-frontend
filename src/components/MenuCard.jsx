/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MenuCard = ({ dish, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mt-2 bg-white border rounded">
      <div>
        <h3 className="text-lg font-bold">{dish.name}</h3>
        <p><strong>Popularity:</strong> {dish.popularity}%</p>
      </div>
      <button
        className="px-4 py-2 text-white transition bg-red-500 rounded hover:bg-red-600"
        onClick={() => onDelete(dish.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default MenuCard;
