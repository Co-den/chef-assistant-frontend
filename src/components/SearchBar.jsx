/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const SearchBar = ({ value, onChange, onSearch, placeholder }) => {
  return (
    <div className="flex items-center space-x-2">
      <input 
        type="text"
        className="w-full p-2 border rounded"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="px-4 py-2 text-white transition bg-green-500 rounded hover:bg-green-600" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

