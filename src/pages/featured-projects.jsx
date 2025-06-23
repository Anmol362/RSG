import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { featureProject } from "../components/project-slider";
import {  useNavigate } from "react-router-dom";

const FeatureProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  

  return (
    <section className="flex flex-col items-center w-full max-w-[1920px] mx-auto px-6 py-[50px] pt-32">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-themeText uppercase font-semibold">
          YOUR NEXT INVESTMENT
        </h2>
        <h1 className="text-[45px] font-bold max-w-[550px] w-full">
          <span className="text-themeText">Featured Projects </span>{" "}
        </h1>
      </div>
      <div className="w-full flex flex-col gap-6 mt-6">
        {featureProject.map((rental, index) => (
          <div
            key={index}
            // className="cursor-pointer"
             data-aos="fade-up"
             onClick={()=>window.open(rental.link,'_blank')}
          >
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <img
                src={rental.image}
                alt={rental.title}
                className="rounded-lg w-full h-[350px] object-cover"
              />
              <h3 className="mt-4 ml-2 font-semibold">
                <span className=" text-xl uppercase">{rental.title}</span>
              </h3>

              <p className="mt-2 ml-2 text-gray-600 line-clamp-4">
                {rental?.description}
              </p>
              <a
                href={rental.link}
                target="_blank"
                className="mt-4  ml-2 inline-block text-themeText hover:text-white hover:bg-themeText p-2 rounded-lg transition-all"
              >
                Watch More &rarr;
              </a>
            </div>
          </div>
        ))}

        <div className="flex space-x-4 mb-8 w-full flex-center my-4">
          <a
            href="tel:+919165957070"
            className=" bg-btn-color text-white px-4 py-2 rounded"
          >
            Book a visit now
          </a>
          {/* <button className="border border-black text-black px-4 py-2 rounded">Read More</button> */}
        </div>
      </div>
    </section>
  );
};
export default FeatureProjects;
