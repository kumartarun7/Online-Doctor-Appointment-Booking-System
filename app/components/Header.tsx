"use client"
import React, { useState } from 'react'
import { useEffect,useRef } from 'react'
import Link from 'next/link'
import {BiMenu} from 'react-icons/bi'
import axios from 'axios'
import { useAppContext } from '@/context/UserContextProvider';




const navLinks=[
  {path:'/home',
display:'Home'},
{
  path:"/Doctors",
  display:'Find a Doctor'
},
{
  path:"/services",
  display:'Services'
},
{
  path:"/contact",
  display:'Contact'
},

]



const Header = () => {

const [isActive,SetActive]=useState(false);


const toggle=()=>{
  SetActive(!isActive);
}


const{loged,setloged,imageurl}=useAppContext();






  return (
    <>
     <header className='header flex items-center'>
      <div className="container">
        <div className='flex items-center justify-between'>



       <div>
        <img src="/assets/images/logo.png" alt="" />
       </div>

     <div className="navigtion">
      <ul  className=" hidden md:menu md:flex md:items-center md:gap-[2.7rem] ">

      {
        navLinks.map((link,index)=><li key={index}>
          <Link href={link.path} className={'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor hover:font-[500]'}>{link.display}</Link>
        </li>)
      }

      </ul>

     </div>

  <div className='flex items-center gap-4'>
    <div className='hidden'>
      <Link href={'/'}>
        <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
          <img src="/assets/images/avatar-icon.png" alt="" />
        </figure>
      </Link>
    </div>


{ loged?<>
  <Link
   href='/dashboard'
  type="button"
  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
  id="user-menu-button"
>
  <span className="sr-only">Open user menu</span>
  <img
    className="w-10 h-10 rounded-full"
    src={imageurl}
    alt="user photo"
  />
</Link>

</>:<>
<Link href={'/login'}>
    <button  className=' bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
   </Link>

</>

}





 
  



   <span className='md:hidden'>
    <BiMenu  onClick={toggle} className='w-6 h-6 cursor-pointer'/>
   </span>

  </div>
        </div>
      </div>
<div>
</div>
    </header>
    
    {
      isActive&&(<div className="md:hidden bg-[#B1D4E0]">
      <ul  className=" flex flex-col h-auto w-[100%] justify-center items-center">
    
      {
        navLinks.map((link,index)=><li key={index}>
          <Link href={link.path} className={'text-textColor text-[16px] leading-7 font-[600] hover:text-textColor hover:font-[500] h-auto w-max'}>{link.display}</Link>
        </li>)
      }
    
      </ul>
    
     </div>)
    }</>
   
    
  )
}

export default Header
