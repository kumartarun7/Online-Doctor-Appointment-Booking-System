
import {connect} from "@/dbconfig/dbconfig"
import Doctors from "@/models/doctorschema"
import { NextRequest, NextResponse } from "next/server";

  
connect();








export async function PUT(request: NextRequest,{params}:any){
    try{
        const id=params.id;
        const reqbody= await request.json();
        // console.log(reqbody);

         const data= await  Doctors.findByIdAndUpdate(id,reqbody); 
         return NextResponse.json(data);
    }


    catch(error:any){
        return NextResponse.json({error:error.message},
        {status: 500})
    
    }
    
    }
