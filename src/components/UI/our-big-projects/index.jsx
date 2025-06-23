import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

let rentals = [
  {
    _id: "01",
    title: "Forest Retreat",
    description:
      "A quiet and beautiful place close to nature. Forest Retreat offers lovely homes with peaceful surroundings, perfect for relaxing and feeling connected to nature.",
    image: "./images/e2-brochure-golden-correction-c2c-x64.png",
    link: "#",
  },
  {
    _id: "02",
    title: "Woodland Retreat",
    description:
     "A cozy home surrounded by trees and nature. Woodland Retreat is perfect for those who love peace, fresh air, and a connection to the outdoors.",
    image: "./images/e2-brochure-golden-correction-c2c-x65.png",
    link: "#",
  },
  {
    _id: "03",
    title: "Harmony House",
    description:
      "A peaceful and modern home surrounded by greenery. Harmony House is perfect for families who want a calm and comfortable lifestyle.",
    image: "./images/e2-brochure-golden-correction-c2c-x67.png",
    link: "#",
  },
  {
    _id: "04",
    title: "Aliva Priva Ja",
    description:
      "A lively community built for families. With fun play areas and open spaces, Aliva Priva Ja is a great place to make happy memories together.",
    image: "./images/e2-brochure-golden-correction-c2c-x642.png",
    link: "#",
  },
];

export const BigProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='flex flex-col items-center w-full max-w-[1920px] mx-auto px-6 py-[20px]'>
      <div className='text-center' data-aos='fade-up'>
        <h2 className='text-themeText uppercase font-semibold'>Your Dream Home</h2>
        <h1 className="text-[45px] font-bold mt-[20px] max-w-[550px] w-full">
          If You’re In Need Of Your <span className="text-themeText">Dream</span>{" "}
          Home
        </h1>
      </div>
      <div className='w-full mt-6' data-aos='fade-up'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          speed={3000}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            enable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {rentals.map((rental, index) => (
            <SwiperSlide key={index}>
              <div className='p-4 bg-white rounded-lg shadow-lg'>
                <img src={rental.image} alt={rental.title} className='rounded-lg w-full' />
                <h3 className='mt-4 text-2xl font-semibold'>{rental.title}</h3>
                <p className='mt-2 text-gray-600'>{rental.description}</p>
                <a href={rental.link} className='mt-4 inline-block text-purple-600'>
                  Book Now &rarr;
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
