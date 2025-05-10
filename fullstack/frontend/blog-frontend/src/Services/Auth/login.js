import fetchUtil from "../../utils/fetchUtil";

export const loginUser = async (formData) => {
  try {
    const data = await fetchUtil("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return data;
  } catch (error) {
    throw new Error(error.message || "Login failed");
  }
};
