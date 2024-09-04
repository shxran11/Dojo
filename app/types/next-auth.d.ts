import "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
  }
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
