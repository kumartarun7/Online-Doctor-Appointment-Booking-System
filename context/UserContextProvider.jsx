"use client"

import { createContext, useContext, useState,useEffect } from "react"
import axios from 'axios';

const AppContext=createContext();


export function AppWrapper({children}){
  const[loged,setloged]=useState(null);
  const[user,setUser]=useState('patient');
  const[imageurl,setimageurl]=useState("");


  useEffect(()=>{

    getid();
  
  },[])


  
  const getid=async ()=>{
    const response=await axios.get("/api/getid");
     setloged(response.data.id);
     setimageurl(response.data.imageurl)
    
  }
  

return(

  <AppContext.Provider value={{loged,setloged,user,imageurl}}>
    {children}
  </AppContext.Provider>
)


}


export function useAppContext(){
  return useContext(AppContext);
}