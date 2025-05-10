import fetchUtil from "../../utils/fetchUtil";

const deleteBlog = async (blogId, token) => {
  try {
    const data = await fetchUtil(`/blog/delete/${blogId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to delete blog");
  }
};

export default deleteBlog;
