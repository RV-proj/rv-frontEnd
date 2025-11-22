import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getUser } from "../api/users";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        await fetch(`http://localhost:5000/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            userName: user.name,
          }),
        });

        return true;
      } catch (err) {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getUser(session.user.email);

      // console.log("Guests:", guest);
      session.user.userId = guest.id;

      return session;
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
