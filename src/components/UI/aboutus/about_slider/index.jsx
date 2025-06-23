// src/components/Slider.js
import React, { useEffect } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSlider = () => {
  const slides = [
    { id: 1, text: "About us", imageUrl: "https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750168949/intro_jtzpni.jpg" },
    // { id: 2, text: 'Slide 2', imageUrl: '/path-to-image2.jpg' },
    // { id: 3, text: 'Slide 3', imageUrl: '/path-to-image3.jpg' },
    // Add more slides as needed
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full h-full ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex flex-col items-center justify-center h-full bg-gray-200 shadow-themeText" data-aos="fade-up">
              <img
                src={slide.imageUrl}
                alt={slide.text}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute w-auto h-auto bg-white/10 p-[50px] mt-[100px] flex-center">
                <h1 className="font-bold text-[35px] lg:text-[60px] uppercase " data-aos="fade-up">{slide.text}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSlider;
