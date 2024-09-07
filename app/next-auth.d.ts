import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// Extend the NextAuth session type to include the `id`
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}
