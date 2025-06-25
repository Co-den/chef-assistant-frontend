import { createContext, useState } from "react";

export const RecipeContext = createContext();

// eslint-disable-next-line react/prop-types
const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default  RecipeProvider;
