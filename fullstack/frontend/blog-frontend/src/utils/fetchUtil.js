// src/utils/fetchUtil.js
import { BASE_URL } from "../config/config";

const fetchUtil = (url, options = {}) => {
  const fullUrl = `${BASE_URL}${url}`;

  return new Promise((resolve, reject) => {
    fetch(fullUrl, options)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          reject(new Error(data.message || "Request failed"));
        } else {
          resolve(data); // parsed JSON
        }
      })
      .catch((error) => {
        reject(new Error(error.message || "Network error"));
      });
  });
};

export default fetchUtil;
