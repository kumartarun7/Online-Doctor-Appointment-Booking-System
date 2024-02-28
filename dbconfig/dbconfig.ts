import mongoose from "mongoose";

export async function connect(){

try{

   mongoose.connect(process.env.mongo_url!);
   const connection=mongoose.connection;
   connection.on('connected',()=>{
    console.log("MongoDB connected successfully");
   })
}

catch(error){
console.log('Mongodb not connected');
console.log(error);
}




}