import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const page = () => {
  return (
   <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

<section id="new-features" className="py-8 bg-[url('https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover sm:py-10 lg:py-16">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl xl:text-5xl">
        Services we offer </h2>
    </div>
    <div
      className="grid grid-cols-1  text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0  ">
      <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center bg-[#B1D4E0] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
           </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Cancer Care</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center  bg-[#B1D4E0] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Labour & delivery</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center  bg-[#B1D4E0] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Heart & Vascular</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center  bg-[#B1D4E0] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Mental health</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic..</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center  bg-[#B1D4E0] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Neurology</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center  bg-[#B1D4E0] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Burn treatment</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default page
