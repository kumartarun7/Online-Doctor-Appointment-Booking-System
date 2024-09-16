import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";

// Simulating a DB connection (as you may have elsewhere)
const connect = async () => {
  console.log("Connected to the database");
};
connect();

// API handler for the GET request
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value || '';
    console.log("Received token from cookies:", token); // Log token for debugging

    if (!token) {
      return new NextResponse(JSON.stringify({ error: 'Token not provided' }), { status: 401 });
    }

    try {
      // Ensure the environment variable is properly loaded
      if (!process.env.TOKEN_SECRECT) {
        throw new Error('TOKEN_SECRET is not defined');
      }

      // Verify JWT token
      const decodedToken: any = Jwt.verify(token, process.env.TOKEN_SECRECT!);
      console.log("Decoded token:", decodedToken); // Log decoded token for debugging

      return NextResponse.json(decodedToken);
    } catch (error: any) {
      console.error("JWT verification failed:", error); // Log token verification error
      return new NextResponse(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
    }

  } catch (error: any) {
    console.error("API Internal Error:", error); // Log any unexpected errors
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
