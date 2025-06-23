// src/components/RealAppraisalServices.js
import React, { useEffect } from 'react';

import AOS from 'aos';

const RealAppraisalServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 ">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-[1920px] w-full mx-auto gap-[50px]">
        <div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1 w-full md:w-1/2 relative"
          data-aos="fade-right"
        >
          <div className="w-full md:w-[80%] h-[350px]">
            <img
              src="/images/empressia.png"
              alt="Real Estate 1"
              className="w-full h-full rounded-lg object-cover object-top"
            />
          </div>
          <div className="w-full md:w-[20%] h-[350px] translate-y-4 animate-pulse">
            <img
              src="/images/e2-brochure-golden-correction-c2c-x633.png"
              alt="Real Estate 2"
              className="w-full h-full rounded-lg object-cover object-top"
            />
          </div>
        </div>
        <div
          className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
          data-aos="fade-left"
        >
          <div className="text-themeText text-sm font-semibold">OUR VALUE</div>
          <h1 className="text-[20px] md:text-[50px] font-bold mt-2 leading-[60px]">
            Unlocking Real Appraisal <span className="text-themeText">Services</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Our experts can provide valuable insights and assist you in identifying properties.
          </p>
          <button className="mt-6  bg-btn-color text-white px-6 py-2 rounded-lg">Get Started Free</button>
        </div>
      </div>
    </div>
  );
};

export default RealAppraisalServices;
