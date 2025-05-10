import fetchUtil from "../../utils/fetchUtil";

const getMyBlogs = async (token) => {
  try {
    const data = await fetchUtil("/blog/myblogs", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch your blogs");
  }
};

export default getMyBlogs;
