import { auth } from "../authSession/auth";

export async function getUser(email) {
  const res = await fetch(`https://rv-back-end.vercel.app/user/email/${email}`);
  return await res.json();
}

export async function getSessionUser() {
  const session = await auth();
  const res = await fetch(`https://rv-back-end.vercel.app/user/${session.user.userId}`);

  return await res.json();
}
