import { useMutation } from "@tanstack/react-query";

export async function createUser(userData) {
  const res = await fetch(`http://localhost:5000/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("Failed to create user");
  }

  return await res.json();
}

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};
