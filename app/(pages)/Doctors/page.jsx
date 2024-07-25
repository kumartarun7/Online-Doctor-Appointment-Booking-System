"use client"

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React, { useEffect, useState } from 'react'
import {doctors} from '@/app/data/doctors'
import Doctorcard from '@/app/components/Doctorcard'
import axios from 'axios'


const page = () => {

  const [data,setData]=useState([])

    const getdata=async ()=>{

         const response=await axios.get("/api/dataall");
        //  console.log(response.data);
         setData(response.data)

    }



 useEffect(()=>{
   getdata();
 },[])




  return (
    <> 
    <section className='bg-[#fff9ea]'>
    <div className='container text-center'>
      <h2 className='heading mb-4'>Find a Doctor</h2>
      <div className='max-w-[570px] mx-auto bg-[#0066ff2c] rounde-md flex items-center justify-between'>
        <input type="search"
        className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
        placeholder='Search Doctor' />
        <button className='btn mt-0 rounded-[0px] rounded-r-md'>
          Search
        </button>
      </div>
    </div>
    </section>
  <section>
<div className='container'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

{
  data?.map((item)=>{

   if(item.userType==='doctor'&&item.isApproved=='approved'){
    return(<Doctorcard  data={item}  />)
   }

  })
}




  </div>
</div>




  </section>
    </>
   
  )
}

export default page
