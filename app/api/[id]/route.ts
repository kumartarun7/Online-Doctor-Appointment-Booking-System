import {connect} from "@/dbconfig/dbconfig"
import Doctors from "@/models/doctorschema"
import { NextRequest, NextResponse } from "next/server";

  
connect();


export async function GET(request: NextRequest,{params}:any){
    try{
        const id=params.id;

         const data= await  Doctors.findById(id); 
         console.log(data);
         return NextResponse.json(data);
    
    }
    catch(error:any){
        return NextResponse.json({error:error.message},
        {status: 500})
    
    }
    
    }



    

  
    




