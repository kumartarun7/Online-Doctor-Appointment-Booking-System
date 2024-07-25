import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { connect } from "@/dbconfig/dbconfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value || '';

    if (!token) {
      return new NextResponse(JSON.stringify({ error: 'Token not provided' }), { status: 401 });
    }

    try {
      const decodedToken: any = Jwt.verify(token, process.env.TOKEN_SECRET!);
      return NextResponse.json(decodedToken);
    } catch (error: any) {
      return new NextResponse(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
    }

  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
