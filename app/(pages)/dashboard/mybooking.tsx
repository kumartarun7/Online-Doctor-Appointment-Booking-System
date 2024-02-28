import Doctorcard from '@/app/components/Doctorcard'
import React from 'react'

const Mybooking = (props:object) => {

console.log(props.data);


  return (

         <div className='container'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>

{
  props.data.bookings?.map((item)=>{

    return(<Doctorcard  data={item}  />)
  

  })
}


  </div>
      
    </div>
  )
}

export default Mybooking
