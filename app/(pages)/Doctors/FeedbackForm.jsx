"use client"
import React, { useState } from 'react'

const FeedbackForm = () => {
  const [review, setReviewText] = useState('');
  const handleSubmitReview=async e=>{
    e.preventDefault()
  }
  
  return (
    <>
    <form>
    <div className='mt-[30px]'>
    <h3 className='text-headingColor text-[16px] leaidng-6 font-semibold mb-4 mt-0'>
        Share your feedback or suggestions*
    </h3>


    <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md'
     rows="5"
     placeholder='Write your message'
     onChange={e=>setReviewText(e.target.value)}></textarea>
    </div>
     <button type='submit' className='btn '  onClick={handleSubmitReview}>
      Submit Feedback
     </button>
    </form>
       
    </>
  )
}

export default FeedbackForm
