import fetchUtil from "../../utils/fetchUtil";

const getAllBlogs = async () => {
  try {
    const data = await fetchUtil("/blog/all", {
      method: "GET",
    });
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch all blogs");
  }
};

export default getAllBlogs;
