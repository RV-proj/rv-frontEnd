export async function getOrders() {
  const res = await fetch("https://rv-back-end.vercel.app/order");

  return await res.json();
}

export async function getOrderByEmail(email) {
  const res = await fetch(`https://rv-back-end.vercel.app/order/email?email=${email}`);

  return await res.json();
}

export async function userStatusUpdate(id, status) {
  const res = await fetch(`https://rv-back-end.vercel.app/order/status/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  return await res.json();
}
