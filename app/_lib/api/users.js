export async function getUser(email) {
  const res = await fetch(`http://localhost:5000/user?email=${email}`);

  return await res.json();
}
