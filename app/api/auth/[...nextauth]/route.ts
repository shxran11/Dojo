import NextAuth from "next-auth";
import { authOptions } from "./options"; // Import from the separate file

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
