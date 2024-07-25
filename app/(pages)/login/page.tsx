"use client"
import React, { useContext, useState } from 'react'
import axios from "axios";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { useRouter } from "next/navigation";
import { useAppContext } from '@/context/UserContextProvider';
import toast, { Toaster } from 'react-hot-toast';




const page = () => {

  const{loged,setloged}=useAppContext();
  


  const router = useRouter();
     const [formData,setFormData]=useState({
      email:'',
      password:''
     })

  
     const handleInputChange=(e:any)=>{
      setFormData({...formData,[e.target.name]: e.target.value})
     }

   
      
     const onLogin=async ()=>{
    
      try{

        const response=await axios.post("/api/login",formData);
        // console.log("Login success", response.data);
        toast.success('Login Successfully')

        location.reload();
        
        
        }
        catch(error:any){
          toast.error("invalid login and password")
          //  console.log("Login failed",error.message);
        }
  
  
    }

    const getid=async ()=>{
      const response=await axios.get("/api/getid");
        // console.log(response.data);
       
    }


   





  return (
    <section className=" bg-[url('https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_1280.jpg')] bg-no-repeat bg-contain ">
  <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0 backdrop-blur-sm">
    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
           Login into your account
        </h1>
        <div className="space-y-4 md:space-y-6" >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
             
              
            </div>
            
          </div>
          <button
             onClick={onLogin}
            className="w-full text-white bg-primaryColor hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
          <p className="text-sm font-light text-gray-500">
            Don’t have an account yet?{" "}
            <a
              href="/signup"
              className="font-medium text-primary-600 hover:underline "
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  

  
</section>


  )
}

export default page
