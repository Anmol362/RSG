import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className=" mx-auto px-4 w-full max-w-[1920px]">
      <div className="flex flex-col xl:justify-around justify-between lg:flex-row flex-wrap">
        <div className="w-full md:w-[380px] sm:p-4 pt-[50px] 2xl:w-[500px] xl:w-[400px]" data-aos="fade-right">
          <div className=" sm:p-4 flex flex-col lg:justify-normal justify-center">
            {/* <h2 className="uppercase font-semibold text-themeText">Testimonials</h2> */}
            <h2 className=" text-[30px] md:text-[35px] lg:text-[40px] font-bold mb-4">
            What our clients think <span className="text-themeText">About us!</span>
            </h2>
            <div className="text-lg text-gray-700">
            “Here’s what they say about us.”
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:w-[800px] lg:w-[600px]" data-aos="fade-left">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
