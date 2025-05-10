import fetchUtil from "../../utils/fetchUtil";

export const registerUser = async (formData) => {
  try {
    const data = await fetchUtil("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return data;
  } catch (error) {
    throw new Error(error.message || "Registration failed");
  }
};
