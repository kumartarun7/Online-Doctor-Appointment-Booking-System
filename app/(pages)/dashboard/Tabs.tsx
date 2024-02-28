import { useAppContext } from '@/context/UserContextProvider'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiMenu } from 'react-icons/bi'

const Tabs = ({tab,setTab}:any) => {
  const router = useRouter();
  const{setloged}=useAppContext();

  const logout=async()=>{
    const res=await axios.get('/api/logout');
    console.log(res.data);
    setloged(null);
    router.push('/home');
  }

  return (
    <div>

<span className='lg:hidden'>
      <BiMenu className='w-6 h-6 cursor-pointer'/>
    </span>
    <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
    <button  onClick={()=>setTab('overview')} className={`${tab==='overview'?'bg-indigo-100 text-primaryColor':'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}
    >Overview</button>
     <button onClick={()=>setTab('appointment')} className={`${tab==='appointment'?'bg-indigo-100 text-primaryColor':'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}
    >Appointments</button>
     <button onClick={()=>setTab('profile')} className={`${tab==='profile'?'bg-indigo-100 text-primaryColor':'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}
    >Profile</button>
<br />
    
      <button
      onClick={logout}
        className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 text-white rounded-md '
        
        > Logout</button>
       

<button
        className='w-full bg-red-500 p-3 text-[16px] leading-7 text-white rounded-md '
        
        >Delete Account </button>

      </div>

    </div>
  
  
  )
}

export default Tabs
