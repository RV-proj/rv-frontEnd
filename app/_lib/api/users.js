import {
  getAuthenticatedSession,
  fetchWithAuth,
} from "../authSession/authSession";

export async function getUser(email) {
  const res = await fetch(`http://localhost:5000/user/email/${email}`);
  return await res.json();
}

export async function getSessionUser() {
  const session = await getAuthenticatedSession();

  const data = await fetchWithAuth(
    `http://localhost:5000/user/${session.user.userId}`,
    session.user.accessToken,
  );

  return data;
}
