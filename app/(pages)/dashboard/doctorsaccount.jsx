"use client"
import React, { useState } from 'react'
import Tabs from './Tabs';
import Doctorabout from '../Doctors/Doctorabout';
import ProfileD from './ProfileD';
import Appointments from './Appointments';

const Doctorsaccount = (props) => {
  

    const [tab,setTab]=useState("overview");
  return (
    <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
             <Tabs tab={tab} setTab={setTab}/>

         <div className='lg:col-span-2'>
          {1&&(
          <div className='flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg text-sm'>
              To get approval please complete your profile. We will review manually and approve within 3 days.
            </div>)}

           {tab==='overview'&&<div>
            <div className='flex items-center gap-4 mb-10'>
              <figure className='max-w-[200px] max-h-[200px]'>
               <img src={props.data.imageurl} alt="" className='w-full' />
              </figure>

              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded-md text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>
                 {props.data.specialization}
              </span>

              <h3 className='text-[22px] leading-9 font-bold text-headingColor mt-3'>
                {props.data.name}
              </h3>

              <p className='text__para font-[15px] lg:max-w-[390px] leading-6'> 
              {props.data.bio}
    
              </p>

              </div>

            </div>
            
            <Doctorabout  data={props.data}/>
            
  
            </div>}
           {tab==='appointment'&&<Appointments data={props.data}/>}
           {tab==='profile'&&<ProfileD data={props.data}/>}


         </div>


        </div>
      
    </div>
  )
}

export default Doctorsaccount
