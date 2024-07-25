
"use client"

import { update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
import { useAppContext } from '@/context/UserContextProvider';








const ProfileD = (props) => {
  const{loged,setloged}=useAppContext();
  const[data,setData]=useState(props.data);


  // const  getData = async () => {

  //   const res= await axios.get(`/api/${loged}`);

  //   setData(res.data);
  // }


  // useEffect(()=>{
  //    getData();
  // },[])

  




  
    const [formData,setFormData]=useState({
        name:data.name,
        email:data.email,
        phone:data.phone,
        bio:data.bio,
        specialization:data.specialization,
        location:data.location,
        bookingPrice:data.bookingPrice,
        qualifications:data.qualifications,
        experiences:data.experiences, 
        timeSlots:data.timeSlots,
        about:data.about
    })


    const  handleInputChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

   const updateProfileHandler=async(e)=>{
       e.preventDefault();
   }


   const deleteItem=(key,index)=>{
    setFormData(prevFormData=>({...prevFormData,[key]:prevFormData[key].filter((_,i)=>i!==index)}))
   }

  const addItem=(key,item)=>{

    setFormData(prevFormData=>({...prevFormData,[key]:[ ...prevFormData[key], item ]}))

  }


  const handleReusableInputChangeFunc=(key,index,event)=>{
       const {name,value}=event.target;
       setFormData(prevFormData=>{
          const updateItems=[...prevFormData[key]]


          updateItems[index] = {
            ...updateItems[index], // Preserve other fields in the object
            [name]: value
        };

       return {
        ...prevFormData,
        [key]:updateItems
       }
        

       })
  }

   const addQualifications=(e)=>{
      e.preventDefault();
        
      addItem('qualifications',{
        startingDate:'',endingDate:'',degree:'',university:''
      })


   }

   const handleQualificaitonChange=(event,index)=>{

      handleReusableInputChangeFunc('qualifications',index,event)

   }
   

   const deleteQualifications=(e,index)=>{
    e.preventDefault();
    deleteItem('qualifications',index);
   }

    


   const addExperiences=(e)=>{
    e.preventDefault();
      
    addItem('experiences',{
      startingDate:'',endingDate:'',position:'',location:''
    })


 }

 const handleExperienceChange=(event,index)=>{

  handleReusableInputChangeFunc('experiences',index,event)

}


const deleteexperiences=(e,index)=>{
  e.preventDefault();
  deleteItem('experiences',index);
 }

const addSlots=(e)=>{
  e.preventDefault();
    
  addItem('timeSlots',{
    day:'',startingTime:'',enddingTime:''
  })


}

const handleSlotChange=(event,index)=>{
handleReusableInputChangeFunc('timeSlots',index,event)

}
   
const deleteSlots=(e,index)=>{
  e.preventDefault();
  deleteItem('timeSlots',index);
 }


 
 const onUpdate = async () => {
  try {
      
   
    const response = await axios.put(`/api/update/${loged}`, formData);
    // console.log(response);
          
      
     
  } catch (error) {
      // console.error("Update failed:", error.message);
  }
};










  return (
    <div>

     <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>
        Profile Information
     </h2>

      <div>
      <div>
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium"
  >
   Name*
  </label>
  <input
  value={formData.name}
  onChange={handleInputChange}
    type="text"
    id="Fullname"
    name='name'
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    placeholder='Your Full Name'
  />
</div>

<div>
  <label
    htmlFor="email"
    className="block mb-2 mt-2 text-sm font-medium"
  >
   Email*
  </label>
  <input
  value={formData.email}
  onChange={handleInputChange}
    type="text"
    name='email'
    id="Fullname"
    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    placeholder='example@gmail.com'
    
  />
</div>

<div>
  <label
    htmlFor="Phone"
    className="block mb-2 mt-2 text-sm font-medium"
  >
   Phone*
  </label>
  <input
  name='phone'
  value={formData.phone}
  onChange={handleInputChange}
    type="number"
    id="number"
    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    placeholder='Phone'
    
  />
</div>

<div>
  <label
    htmlFor="Bio"
    className="block mb-2 mt-2 text-sm font-medium"
  >
   Bio*
  </label>
  <input
  value={formData.bio}
  onChange={handleInputChange}
  name='bio'
    type="text"
    id="number"
    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    placeholder='Write your bio'
    />
</div>


<div>
  <label
    htmlFor="specialization"
    className="block mb-2 mt-2 text-sm font-medium"
  >
   Specialization*
  </label>
  <input
  name='specialization'
  value={formData.specialization}
  onChange={handleInputChange}
    type="text"
    id="number"
    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    placeholder='specialization'
    />
</div>

<div>
  <label
    htmlFor="Price"
    className="block mb-2 mt-2 text-sm font-medium"
  >
   Booking price*
  </label>
  <input
  name='bookingPrice'
  value={formData.bookingPrice}
  onChange={handleInputChange}
    type="number"
    id="number"
    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    placeholder='Booking Price'
    
  />
</div>


<div>
  <label
    htmlFor="Price"
    className="block mb-2 mt-2 text-sm font-medium"
  >
   Location*
  </label>
  <input
  name='location'
  onChange={handleInputChange}
  value={formData.location}
    type="text"
    id="location"
    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    placeholder='Write your Location'
    
  />
</div>








<div>
  <label
    htmlFor="qualifications"
    className="block mb-2 mt-2 text-sm font-medium"
  >
   Qualifications*
  </label>

{
    formData.qualifications?.map((item,index)=><div key={index}>
        <div className='grid grid-cols-2 gap-5'>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Starting Date</p>
                <input type="date" name='startingDate' onChange={e=>handleQualificaitonChange(e,index)} value={item.startingDate} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Ending Date</p>
                <input type="date" name='endingDate'  onChange={e=>handleQualificaitonChange(e,index)} value={item.endingDate} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>

        </div>

        <div className='grid grid-cols-2 gap-5'>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Degree*</p>
                <input type="text" name='degree'  onChange={e=>handleQualificaitonChange(e,index)} value={item.degree} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>University*</p>
                <input type="text" name='university'  onChange={e=>handleQualificaitonChange(e,index)} value={item.university} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>            

        </div>
        <button onClick={e=>deleteQualifications(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete/></button>
        
        
        </div>
        
        
        )
}

<button onClick={addQualifications}   className='bg-[#000] py-2 px-5 mb-5  rounded text-white h-fit cursor-pointer'> Add qualification </button>

 
</div>


<div>
  <label
    htmlFor="experience"
    className="block mb-2 mt-2 text-sm font-medium"
  >
    Experience*
  </label>

{
    formData.experiences?.map((item,index)=><div key={index}>
        <div className='grid grid-cols-2 gap-5'>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Starting Date</p>
                <input type="date" onChange={e=>handleExperienceChange(e,index)} name='startingDate' value={item.startingDate} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Ending Date</p>
                <input type="date"   onChange={e=>handleExperienceChange(e,index)} name='endingDate' value={item.endingDate} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>

        </div>

        <div className='grid grid-cols-2 gap-5'>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Position*</p>
                <input type="text"  onChange={e=>handleExperienceChange(e,index)} name='position' value={item.position} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Location*</p>
                <input type="text"  onChange={e=>handleExperienceChange(e,index)} name='location' value={item.location} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>            

        </div>
        <button onClick={e=>deleteexperiences(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete/></button>
        
        
        </div>
        
        )
}

<button onClick={addExperiences} className='bg-[#000] py-2 px-5 mb-5 rounded text-white h-fit cursor-pointer'> Add Experience </button>

 
</div>





<div>
  <label
    htmlFor="Phone"
    className="block mb-2 mt-2 text-sm font-medium"
  >
    Time Slots*
  </label>

{
    formData.timeSlots?.map((item,index)=><div key={index}>
        <div className='grid grid-cols-2  md:grid-cols-4 mb-[10px] gap-5'>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Day*</p>
                <select onChange={e=>handleSlotChange(e,index)} name='day' value={item.day} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                   <option value="Saturday">Saturday</option>
                   <option value="Sunday">Sunday</option>
                   <option value="Rest Days">Rest Days</option>

                </select>
            </div>
            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Starting Time</p>
                <input onChange={e=>handleSlotChange(e,index)} type="time" name='startingTime' value={item.startingTime} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>

            <div>
                <p className='block mb-2 mt-2 text-sm font-medium'>Ending Time</p>
                <input onChange={e=>handleSlotChange(e,index)} type="time" name='endingTime' value={item.endingTime} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
            </div>

        </div>
        
        <button onClick={e=>deleteSlots(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px]  mb-[30px] cursor-pointer'><AiOutlineDelete/></button>
        
        
        </div>
        
        )
}

<button onClick={addSlots} className='bg-[#000] py-2 px-5 mb-5 rounded text-white h-fit cursor-pointer'> Add Slots </button>

 
</div>


<div>
  <label
    htmlFor="Phone"
    className="block mb-2 mt-2 text-sm font-medium"
  >
   About*
  </label>
  <textarea
  name='about'
  value={formData.about}
  onChange={handleInputChange}
    id="about"
    rows={5}
    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    placeholder='Write about you'
  />
</div>


<div className='mt-7'>
  <button onClick={onUpdate} className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded'>Update Profile</button>

</div>



      </div>
       

      
    </div>
  )
}

export default ProfileD
