"use client";

import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { formateDate } from "@/app/utils/formatDate";
import FeedbackForm from './FeedbackForm.jsx'

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <>
      <div>
        <div className="mb-[50px]">
          <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
            All reviews(272)
          </h4>
          <div className="flex justify-between gap-10 mb-[30px]">
            <div className="felx gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img
                  src="/assets/images/avatar-icon.png"
                  className="w-full"
                ></img>
              </figure>

              <div>
                <h5 className="text-[16px] leading-6 text-irisBlueColor font-thin">
                  Ram Singh
                </h5>
                <p className="text-[16px] leaidng-6 text-irisBlueColor font-thin">
                  {formateDate("02-14-2023")}
                </p>
                <p className="text__para mt-3 text-textColor text-[15px]">
                  Good services, highly recommended
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(5).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </div>
          </div>
        </div>

        {!showFeedbackForm && (
          <div className="text-center">
            <button className="btn" onClick={() => setShowFeedbackForm(true)}>
              Give Feedback
            </button>
          </div>
        )}


        {showFeedbackForm&&<FeedbackForm/>}
      </div>
    </>
  );
};

export default Feedback;
