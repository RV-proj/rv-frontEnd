"use server";

import { auth } from "../authSession/auth";
import { fetchWithAuth } from "../authSession";

export async function getAllOrders() {
  const session = await auth();

  if (!session?.user?.accessToken) {
    throw new Error("Not authenticated");
  }

  const url = "http://localhost:5000/order";
  const data = await fetchWithAuth(url, session.user.accessToken);

  return data;
}
