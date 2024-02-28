import {connect} from "@/dbconfig/dbconfig"
import Doctors from "@/models/doctorschema"
import { NextRequest, NextResponse } from "next/server";

  
connect();


export async function GET(request: NextRequest,{params}:any){
    try{
        

         const data= await  Doctors.find(); 
         return NextResponse.json(data);
    
    }
    catch(error:any){
        return NextResponse.json({error:error.message},
        {status: 500})
    
    }
    
    }