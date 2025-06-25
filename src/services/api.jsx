const BASE_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
// const BASE_URL = "https://api.spoonacular.com"; // Uncomment this line if
const API_KEY = "47d43f22f08048f1b703d64a12ef6c0b";
const MENU_URL = "https://chef-assistant-1.onrender.com/menu";





export const addDishToMenu = async (dishName) => {
  await fetch(`${MENU_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dishName }),
  });
};

export const fetchVideos = async (dishName) => {
  const response = await fetch(`${BASE_URL}/videos/${encodeURIComponent(dishName)}`);
  if (!response.ok) {
    throw new Error("Videos not found");
  }
  return response.json();
}

export const deleteDish = async (id) => {
  await fetch(`https://chef-assistant-1.onrender.com/menu/${id}`, { method: "DELETE" });
};



export const fetchMenu = async () => {
  try {
    const response = await fetch(`${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch menu");
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchSavedRecipes = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("https://chef-assistant-1.onrender.com/recipes/saved", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error("Failed to fetch saved recipes");

  return response.json();
};




export const fetchRecipe = async (dishName) => {
  const response = await fetch(`https://chef-assistant-1.onrender.com/recipes?name=${dishName}`);
  return response.json();
};

export const saveRecipe = async (recipeData) => {
  const token = localStorage.getItem("token");

  const response = await fetch("https://chef-assistant-1.onrender.com/recipes/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipeData),
  });

  return response.json();
};




//AUTHENTICATION
export const registerUser = async (userData) => {
  const response = await fetch("https://chef-assistant-1.onrender.com/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (data.token) {
    localStorage.setItem("token", data.token); // Store JWT token
    localStorage.setItem("user", JSON.stringify(data.user)); // Store user details
  }

  return data;
};

export const loginUser = async (userData) => {
  const response = await fetch("https://chef-assistant-1.onrender.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (data.token) {
    localStorage.setItem("token", data.token); // Store JWT token
    localStorage.setItem("user", JSON.stringify(data.user)); // Store user details
  }

  return data;
};

export const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("https://chef-assistant-1.onrender.com/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.json();
};


export const createMenu = async ({ title, recipeIds }) => {
  const token = localStorage.getItem("token");

  const response = await fetch("https://chef-assistant-1.onrender.com/menu/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, recipeIds }),
  });

  return response.json();
};
