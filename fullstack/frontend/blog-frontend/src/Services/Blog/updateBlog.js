import fetchUtil from "../../utils/fetchUtil";

const updateBlog = async (blogId, updatedData, token) => {
  try {
    const data = await fetchUtil(`/blog/update/${blogId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to update blog");
  }
};

export default updateBlog;
