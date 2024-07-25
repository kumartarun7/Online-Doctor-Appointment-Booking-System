"use client"

import React,{useEffect, useState} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast, { Toaster } from 'react-hot-toast';
import {v4 as uuidv4} from 'uuid'
import {app,storage} from '@/app/Firebase'
import { useRouter } from "next/navigation";
import  axios from "axios";





const page = () => {
  const router = useRouter();
  const [image, setImage] = useState(null);
 
  

  const [formData,setFormData]=useState({
    name:'',
    phone:'',
    imageurl:'https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg',
    email:'',
    password:'',
    userType:''
   })


   const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
   }


   const imagesubmit=()=>{
    toast.success("wait a second to upload");
    
    const storageRef = ref(storage, `image/${uuidv4()}`);
    
    const uploadTask = uploadBytesResumable(storageRef,image);
  
    uploadTask.on('state_changed', 
      (snapshot) => {
        
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            // console.log('Upload is paused');
            break;
          case 'running':
            // console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
      }, 
      () => {
      
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          setFormData({...formData,imageurl: downloadURL})
          toast.success("Image added successfully");
        });
      }
    );
    
   }


   const onSignup = async () => {
    try {
        
     
      const response = await axios.post("/api/signupD", formData);
            
        
        // Check the response status and data
        if (response && response.status === 200) {
            // console.log("Signup successful:", response.data);
            toast.success("Signup Successfully!");
            router.push("/login");
        } else {
            toast.error("Signup failed. Unexpected response:", response);
        }
    } catch (error) {
        toast.error("Signup failed:", error.message);
    }
};
   
  return (
    <section className="bg-[url('https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_1280.jpg')] h-auto bg-cover ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 backdrop-blur-sm">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create a new account
          </h1>
          <div className="space-y-4 md:space-y-6">
          <div className='flex justify-between gap-5 '>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone:
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Number"
                required
              />
            </div></div>
          
<div className='flex justify-between gap-5 '>
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
            </div>
            

           
    <div className='flex justify-between'>
            <div className="w-1/2">
            <label htmlFor="profileImage" className="block text-sm font-semibold text-gray-600">Profile Image:</label>
            <input 
              type="file" 
              id="profileImage"
              name="profileImage" 
              accept="image/*"
              onChange={(e)=>setImage(e.target.files[0])} 
              className=" overflow-hidden block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            />
           
            <button onClick={imagesubmit} type="button" className="focus:outline-none text-white bg-blue-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-1 mt-2 dark:bg-blue-500 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Upload</button>
          </div>
          
          <img
    className="w-10 h-10 rounded-full mt-5"
    src={formData.imageurl}
    alt="user photo"
  />

</div>


            <div className="">
          <label htmlFor="userType" className="block text-sm font-semibold text-gray-900">Are you a:</label>
          <select 
            id="userType" 
            name="userType" 
            value={formData.userType} 
            onChange={handleInputChange} 
            required
            className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select User Type</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>

           


            <button 
              onClick={onSignup}
              className="w-full text-white bg-primaryColor hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Signup
            </button>
            <p className="text-sm font-light text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline "
              >
                login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Toaster/>
  </section>
  )
}

export default page
