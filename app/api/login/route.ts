import { connect } from "@/dbconfig/dbconfig";
import Doctors from "@/models/doctorschema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log("Request Body:", reqBody);

    // Check if the user exists
    const user = await Doctors.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    // Validate the password
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    // Create token data
    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
      imageurl: user.imageurl,
    };

    // Check if TOKEN_SECRECT is properly set
    if (!process.env.TOKEN_SECRECT) {
      throw new Error("TOKEN_SECRECT is not set or defined.");
    }

    // Log TOKEN_SECRECT for debugging purposes
    console.log("TOKEN_SECRECT:", process.env.TOKEN_SECRECT);

    // Create JWT token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRECT, { expiresIn: "1d" });
    console.log("Generated JWT token:", token);

    // Create response
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    // Set token in cookies with httpOnly flag
    response.cookies.set("token", token, { httpOnly: true });
    console.log("Token set in cookies");

    return response;

  } catch (error: any) {
    console.error("Login error:", error); // Log the error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
