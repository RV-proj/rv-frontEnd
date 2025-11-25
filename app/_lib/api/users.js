import { auth } from "../authSession/auth";

export async function getUser(email) {
  const res = await fetch(`http://localhost:5000/user/email/${email}`);
  return await res.json();
}

export async function getSessionUser() {
  const session = await auth();
  const res = await fetch(`http://localhost:5000/user/${session.user.userId}`);

  return await res.json();
}
