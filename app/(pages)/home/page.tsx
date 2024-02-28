

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Faq from "@/app/components/Faq";
import React, { useEffect } from "react";
import Link from "next/link";



const page = () => {



  return (
    <>
    <section className="bg-[#B1D4E0] p-0 m-0 pt-3">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-10">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                       
                        <h2 className="text-3xl text-gray-800 font-extrabold md:text-6xl">
                            We help patients to live life longer and disease free
                        </h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link href="/Doctors" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Request an appointment
                            </Link>
                            
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="/assets/images/doctor.png"
                            alt=""
                        />
                    </div>
                </div>
               
            </section>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

<section id="new-features" className="bg-[#B1D4E0] sm:py-10 lg:py-0">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div
      className="grid grid-cols-1  text-center  sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 ">
      <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center  bg-[#EEEDEB] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
           </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Cancer Care</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center  bg-[#EEEDEB] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Labour & delivery</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center  bg-[#EEEDEB] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Heart & Vascular</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center  bg-[#EEEDEB] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Mental health</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic..</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center  bg-[#EEEDEB] rounded-md m-1">
        <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
        <i className="fa-solid fa-kit-medical"></i>     
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Neurology</h3>
        <p className="mt-5 text-base text-gray-600">World class care for everyone. Our health system offers unmatched expert health care. From lab to the clinic.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center  bg-[#EEEDEB] rounded-md m-1">
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
  );
};

export default page;
