import { handleAuth } from "@auth0/nextjs-auth0";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const GET = handleAuth();
