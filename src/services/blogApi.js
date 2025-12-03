const API_BASE_URL = "https://blogplatform-backend-cloudinary-wheat.vercel.app";

/**
 * Fetch all published blogs
 * @returns {Promise} Response with blogs array
 */
export const getPublishedBlogs = async () => {
  const response = await fetch(`${API_BASE_URL}/api/blogs/published`);
  if (!response.ok) {
    throw new Error("Failed to fetch published blogs");
  }
  const data = await response.json();
  return data;
};

/**
 * Fetch blog by slug
 * @param {string} slug - Blog slug
 * @returns {Promise} Response with blog object
 */
export const getBlogBySlug = async (slug) => {
  const response = await fetch(`${API_BASE_URL}/api/blogs/slug/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  const data = await response.json();
  return data;
};

