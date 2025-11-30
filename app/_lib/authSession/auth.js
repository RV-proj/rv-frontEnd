import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getUser } from "../api/users";
// import { cookies } from "next/headers";

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
        const res = await fetch(`http://localhost:5000/user`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            userName: user.name,
          }),
        });

        const data = await res.json();

        if (!data.token) {
          console.error("No token received from backend!");
          return false;
        }

        // console.log(data);

        // const cookieStore = await cookies();
        // cookieStore.set("token", data.token, {
        //   httpOnly: true,
        //   secure: false,
        //   sameSite: "lax",
        //   maxAge: 60 * 60 * 24 * 7, // 7 days
        //   path: "/",
        // });

        user.accessToken = data.token;
        user.userId = data.user.id;

        return true;
      } catch (err) {
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.userId = user.userId;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.userId = token.userId;
      session.user.accessToken = token.accessToken;

      const guest = await getUser(session.user.email);
      session.user.userId = guest[0].id;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
