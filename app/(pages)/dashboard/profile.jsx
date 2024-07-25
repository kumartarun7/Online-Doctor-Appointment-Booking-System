"use client"

import React,{useEffect, useState} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast, { Toaster } from 'react-hot-toast';
import {v4 as uuidv4} from 'uuid'
import {app,storage} from '@/app/Firebase'
import { useRouter } from "next/navigation";
import  axios from "axios";



const Profile = (props) => {
  const router = useRouter();
  const [image, setImage] = useState(null);
 
  

  const [formData,setFormData]=useState({
    name:props.data.name,
    phone:props.data.phone,
    imageurl:props.data.imageurl,
    email:props.data.email,
    password:props.data.password,
   })


   const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
   }


   const imagesubmit=()=>{
    
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



   const onUpdate = async () => {
    try {
        
     
      const response = await axios.put(`/api/update/${props.data._id}`, formData);
      // console.log(response);
      // toast.success("Profile updated Successfully");

      location.reload();
              
       
    } catch (error) {
        toast.error("Update failed:", error.message);
    }
  };
  


  
   
  return (
    <section className='h-auto'>
    <div className="flex flex-col items-start justify-start mt-5  py-8 mx-auto  lg:py-0 ">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
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

            <button 
              onClick={onUpdate}
              className="w-full text-white bg-primaryColor hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
    <Toaster/>
  </section>
  )
}


export default Profile
