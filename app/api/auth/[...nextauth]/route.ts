import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID?process.env.GOOGLE_CLIENT_ID:"",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET?process.env.GOOGLE_CLIENT_SECRET:"",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
