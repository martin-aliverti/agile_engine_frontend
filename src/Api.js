const API_URL = "http://localhost:3000";

export default {
  get: async (endpoint) => {
    const response = await fetch(`${API_URL}/${endpoint}`);
    return response.json();
  },
};
