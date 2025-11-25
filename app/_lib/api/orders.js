export async function getOrders() {
  const res = await fetch("http://localhost:5000/order");

  return await res.json();
}

export async function getOrderByEmail(email) {
  const res = await fetch(`http://localhost:5000/order/email?email=${email}`);

  return await res.json();
}

export async function userStatusUpdate(id, status) {
  const res = await fetch(`http://localhost:5000/order/status/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  return await res.json();
}
