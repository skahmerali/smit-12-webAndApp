import fetchUtil from "../../utils/fetchUtil";

const createBlog = async (blogData, token) => {
  try {
    const data = await fetchUtil("/blog/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to create blog");
  }
};

export default createBlog;
