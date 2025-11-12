export async function getOrders() {
  const res = await fetch("http://localhost:5000/order");

  return await res.json();
}
