import axios from 'axios';

// Base URL for your backend API
const API_URL = import.meta.env.VITE_BACKEND_URL; // Update this if your backend runs on a different port or URL

// Function to get news by category from MongoDB
const getNewsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/news/${category}`);
    return response.data; // Assuming your backend returns the articles in the expected format
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Could not fetch news data");
  }
};

// Function to get all categories (optional)
const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/news`);
    return response.data; // Assuming this returns all articles by category
  } catch (error) {
    console.error("Error fetching all news:", error);
    throw new Error("Could not fetch news data");
  }
};

export default {
  getNewsByCategory,
  getAllCategories, // Include this if you want to fetch all categories
};
