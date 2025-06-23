import React, { useEffect } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import AOS from 'aos';

export const HomeSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='flex flex-wrap flex-col md:flex-row items-cente justify-center w-full max-w-[1920px] min-h-[500px] lg:mx-auto lg:p-6 py-[100px]'>
      {/* Left Side */}
      <div className='flex-center flex-col gap-[15px] w-[95%] relative' data-aos='fade-up'>
        {/* <h3 className='text-themeText uppercase font-semibold'>Solutions</h3> */}
        <h1 className='text-5xl font-bold text-center leading-[60px] capitalize'>
        We will help you in finding the property that meets <span className='text-themeText capitalize'> your checklist.</span>
        </h1>
        <p className='mt-4 text-gray-700'>
        Tell our experts what you are looking for
        </p>
        <a href="tel:+919165957070" className='mt-6 px-6 py-3  bg-btn-color text-white rounded-lg'> Book a free call now.</a>
      </div>
      {/* Right Side (Slider) */}
      {/* <div className='w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left p-4' data-aos='fade-up'>
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}          
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500, // Time in milliseconds before the next slide
            pauseOnMouseEnter: true,
            disableOnInteraction: false, // Autoplay will not be disabled after user interactions
          }}
        >
          <SwiperSlide>
            <img src="./images/e2-brochure-golden-correction-c2c-x62.png" alt="Image 3" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/e2-brochure-golden-correction-c2c-x64.png" alt="Image 1" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/e2-brochure-golden-correction-c2c-x67.png" alt="Image 2" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/e2-brochure-golden-correction-c2c-x633.png" alt="Image 3" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/e2-brochure-golden-correction-c2c-x6111.png" alt="Image 3" className="rounded-lg" />
          </SwiperSlide>
          
        </Swiper>
      </div> */}
    </section>
  );
};
