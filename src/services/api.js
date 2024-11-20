import axios from "axios";

const API_BASE_URL = "https://api.stackexchange.com/2.3";

export const fetchQuestions = async (
  filter,
  page = 1,
  retries = 3
) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`, {
      params: {
        order: "desc",
        sort: filter,
        site: "stackoverflow",
        key: "rl_p8GwAxtRBbtiaLdghARUBofwv",
      },
    });

    return response.data.items;
  } catch (error) {
    if (retries === 0) {
      console.error("Max retries reached. Error fetching questions:", error);
      return [];
    }

    if (
      error.response &&
      error.response.status === 502 &&
      error.response.data.error_name === "throttle_violation"
    ) {
      // If throttling occurs, check for retry-after header or implement custom backoff
      const retryAfter = error.response.headers["retry-after"] || 60; // Default to 60 seconds
      console.warn(
        `API rate limit exceeded. Retrying after ${retryAfter} seconds...`
      );
      await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000)); // Convert seconds to ms

      // Retry the request after waiting
      return fetchQuestions(filter, page, retries - 1);
    }

    console.error("Error fetching questions:", error);
    return [];
  }
};
