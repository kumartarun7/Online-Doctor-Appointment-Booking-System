import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link'



const Doctorcard = (props:any) => {

// const {name,photo,specialization,hospital}=doctor;



  return (
    <div className='p-3'>
        <div>
            <img src={props.data.imageurl} className="w-full" alt="" />
        </div>
        <h2 className='text=[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 '>{props.data.name}</h2>
      <div className='mt-2 lg:mt-4 flex items-center justify-between'>
        <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2  text-[12px] leading-4  font-semibold rounded'>{props.data.specialization}</span>
        <div className='flex items-center gap-[6px]'>

        </div>
      </div>
      <div className='mt-[18px]  flex items-center justify-between'>
        <div>
            <p className='text-[14px] leading-6 font-[400] text-textColor'>At {props.data.location}</p>
        </div>
       
     <Link href={`/Doctors/${props.data._id}`}
     className='w-[44px] h-[44px] rounded border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none'
     >
        <BsArrowRight className='group-hover:text:-white w-6 h-5'/>
     </Link>
       
      </div>
    </div>
  )
}

export default Doctorcard
  