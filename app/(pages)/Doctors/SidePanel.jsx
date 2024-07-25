"use client"

import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';
import axios from 'axios';
import { useAppContext } from '@/context/UserContextProvider';
import toast, { Toaster } from 'react-hot-toast';


const SidePanel = (props) => {

  const formatdate=()=>{
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Month is zero-indexed, so we add 1
    const day = today.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedDate;
   }


  const [loading, setLoading] = React.useState(false);
  const [data,setData]=React.useState({});
  const{loged,setloged}=useAppContext();
 
 

  const getdata=async ()=>{

    if(loged){

     const response=await axios.get(`/api/${loged}`)
    //  console.log(response.data);
     setData(response.data);
    }
   
  }


  React.useEffect(()=>{
getdata();

  },[loged])
  
  const book = data.bookings;
let bookings = [];

if (book && typeof book === 'object' && Symbol.iterator in book) {
  bookings = [...book, props.data];
} else {
  bookings = [props.data];
}



const updatedoctor={
     
  name: data.name,
  payment:true,
  price:props.data.bookingPrice,
  BookedOn:formatdate()
}

  // console.log(props.data.appointments)
  

  let appointments=[];

  if (props.data.appointments && typeof props.data.appointments[Symbol.iterator] === 'function') {
    // Spread the existing appointments and add updatedoctor
     appointments = [...props.data.appointments, updatedoctor];
    // Now you can use appointments
    // console.log(appointments);
} else {
    // console.error("props.data.appointments is not defined or not iterable");
}
  


  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);

  const item={
    
    name:props.data.name,
    price:props.data.bookingPrice,
    quantity:1,
    description:props.data.bio,
    image:props.data.imageurl
  }





//  console.log(formatdate());

  const createCheckOutSession = async () => {
    setLoading(true);
    toast.success("wait a second for checkout");

    try {
      const res=await axios.put(`/api/update/${loged}`,{bookings})
      const Res=await axios.put(`/api/update/${props.data._id}`,{appointments})
      const stripe = await stripePromise;
      const checkoutSession = await axios.post('/api/checkout_session', item);
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });
      
    } 
    catch (error) {
      toast.error("Please login first before checkout");
      
    }

    setLoading(false);
  };
  


  return (
  <div className='shadow-panelShadow p-8 lg:p-5 rounded-md md:w-[350px] mt-6'>
    <div className='flex itmes-center justify-between'>
        <p className='text__para mt-0 font-semibold'>Booking Price</p>
        <span className='text-[15px] leading-7 lg:text-[15px] lg:leading-8 text-headingColor font-bold'>₹{props.data.bookingPrice}</span>
    </div>
    <div className='mt-[30px]'>
        <p className='text__para mt-0 font-semibold text-headingColor'>
            Available Time Slots:
        </p> 
        <ul className='mt-3'>
           
           {
            props.data.timeSlots?.map((item)=> <li className='flex items-center justify-between mb-2'>
            <p className='md:text-[15px] leading-6 text-textColor font-semibold'>{item.day}</p>
            <p className='md:text-[15px] leading-6 text-textColor font-semibold'>{item.startingTime} - {item.endingTime}</p>

            </li>)
           }

        </ul>
    </div>
    <button onClick={createCheckOutSession}  className='btn px-2 w-full rounded-md '>Book Appointment</button>

  </div>
  )
}

export default SidePanel
