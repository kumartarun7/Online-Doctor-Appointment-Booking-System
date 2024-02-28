"use client"
import React, { useEffect, useState } from 'react'
import Mybooking from './mybooking'
import Profile from './profile'
import Doctorsaccount from './doctorsaccount'
import axios from 'axios'
import { useAppContext } from '@/context/UserContextProvider';
import { useRouter } from 'next/navigation'



const page = () => {
  const router = useRouter();
    const [tab,settab]=useState('bookings')
    const{loged,setloged}=useAppContext();
    const [user,setuser]=useState('patient')
    const [data,setData]=useState({});
     

    const getdata=async ()=>{

      if(loged){
       const response=await axios.get(`/api/${loged}`)
       console.log(response.data);
       setuser(response.data.userType)
       setData(response.data);
      }
    }


    useEffect(()=>{

 getdata();

    },[loged])





    const logout=async()=>{
      const res=await axios.get('/api/logout');
      console.log(res.data);
      setloged(null);
      router.push('/home');
    }




    
    
  return (


  user==='patient'?<>
  
  
  <div className='max-w-[1170px] px-5 mx-auto mt-10'>
        <div className='grid md:grid-cols-3 gap-10'>
      <div className='pb-[50px] px-[30px] rounde-md'>
           <div className='flex items-center justify-center'>
            <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor '>
                <img src={data&&data.imageurl}
                className='w-full h-full rounded-full'
                 alt="" />
            </figure>
           </div>

      <div className='text-center mt-4'>
        <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>
           {data&&data.name}
        </h3>
        <p className='text-textColor text-[15px] leading-6 font font-medium'>
           {data&&data.email}
        </p>

      </div>


      <div className='mt-[50px] md:mt-[100px]'>
        <button
        className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 text-white rounded-md '
        onClick={logout}
        
        > Logout</button>
        <br />
        <br />

<button
        className='w-full bg-red-500 p-3 text-[16px] leading-7 text-white rounded-md '
        
        >Delete Account </button>

      </div>




      </div>


  <div className='md:col-span-2 md:px-[30px]'>
    <div>

    <button onClick={()=>settab('bookings')} className={`${tab==='bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
          My bookings
        </button>
        <button onClick={()=>settab('profile')} className={`${tab==='profile' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
           Profile Settings
        </button>
    </div>


   {tab==='bookings'&&<Mybooking data={data} />}
   {tab==='profile'&&<Profile  data={data}   />}

  </div>

        </div>

    </div>
  
  </>:<><Doctorsaccount data={data}  /></>


    
  )
}

export default page
