import { getDataFromToken } from "@/helpers/getDataFromToken";
import Jwt  from "jsonwebtoken";

import { NextRequest,NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
connect();
export async function GET(request:NextRequest){
    try {

        const token=request.cookies.get('token')?.value||''
        if(token){ 
            const decodedToken:any= Jwt.verify(token,process.env.TOKEN_SECRECT!);
            return NextResponse.json(decodedToken);
        }
        else  return new Response(null)

    } catch (error:any) {
        throw new Error(error.message)
    }
}