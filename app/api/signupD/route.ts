import {connect} from "@/dbconfig/dbconfig"
import  Doctors from "@/models/doctorschema"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();


export async function POST(request: NextRequest){
try{

const reqBody=await request.json();
const {name,email,password,phone,imageurl,userType}=reqBody;

console.log(reqBody);

const user= await Doctors.findOne({email})

if(user){
    return NextResponse.json({error:"User already exist"},{status:400})
}

const salt= await bcryptjs.genSalt(10);
const hashedPassword = await bcryptjs.hash(password,salt);

const newUser = new Doctors({
    name,
    email,
    password:hashedPassword,
    phone,
    imageurl,
    userType
})

const savedUser=await newUser.save()
console.log(savedUser);

return NextResponse.json({message:"User created successfully",success:true,savedUser},
    {status: 200})

}
catch(error:any){
    return NextResponse.json({error:error.message},
    {status: 500})

}

}