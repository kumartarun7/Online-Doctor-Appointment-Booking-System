"use client"

import React, { useEffect, useState } from 'react'
import Doctorabout from '../Doctorabout.jsx';
import Feedback from '../Feedback.jsx'
import {formateDate} from '@/app/utils/formatDate.js'
import SidePanel from '../SidePanel.jsx'
import axios from 'axios';


const page = ({params}) => {
  const [data,setData]=useState({});

    const  getData = async () => {

      const id =params.id;
      const res= await axios.get(`/api/${id}`);
      setData(res.data);

    }


    useEffect(()=>{
       getData();
    },[])



  const [tab,setTab]=useState('about');
  return (
    <>
    <section className='m-10 md:flex flex flex-wrap justify-evenly  '>
  
      <div className='max-w-[700px] px-5 mx-auto'>
         <div className='grid md:grip-cols-3 gap-[50px]'>
          <div className='md:grid-cols-3 gap-[50px]'>
           <div className='flex items-center gap-5'>
            <figure className='max-w-[200px] max-h-[200px]'>
               <img src={data.imageurl} alt="" />
            </figure>
            <div>
              <span className='bg-[#CCF0F3] text-irisBlueColor pu-1 px-6 lg:px-6 text-[12px]'>
                {data.specialization}
              </span>
              <h3 className='text-headingColor test-[22px] leading-8 mt-3 font-bold'>
                {data.name}
              </h3>
            
              <p className='text__para text-[14px] leaing-5 md:text-[15px] lg:max-w-[390px]'>
                {data.bio}
              </p>
            </div>
    
           </div>
          <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
            <button
            onClick={()=>setTab('about')} 
            className={`${
              tab==='about' && 'border-b border-solid border-primaryColor'
            } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
            >
              About
            </button>

            <button
            onClick={()=>setTab('feedback')} 
            className={`${
              tab==='feedback' && 'border-b border-solid border-primaryColor'
            } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
            >
              Feedback
            </button>
          </div>
            <div className='mt-[50px]'>
              {
                tab==='about' && <Doctorabout data={data}/>
              }

              {
                tab==='feedback'&&<Feedback/>
              }
            </div>
      
         </div>
        
         </div>
         
      </div>
      <div>
          <SidePanel data={data}/>
        </div>
    </section>
    </>
  )
}

export default page
