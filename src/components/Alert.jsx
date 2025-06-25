/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CustomAlert = ({ type = "info", message, onClose }) => {
  const colors = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
  };

  return (
    <div className={`p-4 border-l-4 rounded mb-4 ${colors[type]} flex justify-between items-center`}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="text-xl ml-4">&times;</button>
      )}
    </div>
  );
};

export default CustomAlert;
