// src/components/TestimonialSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial.module.css";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Happy Homeowner",
    text: "Working with RSG was amazing! From the first consultation, they knew exactly what I was looking for. Their guidance made the entire process smooth and stress-free. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rohit Mehra",
    role: "Property Investor",
    text: "RSG made finding my home so easy! Their team was professional, helpful, and always available to answer my questions. Couldn't have done it without them!",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    role: "Satisfied Seller",
    text: "Thanks to RSG, I’m now in my dream home! Their expertise and dedication truly stood out. They made the process effortless and enjoyable. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Ankit Sharma",
    role: "Property Investor",
    text: "RSG turned my dream into a reality! Their knowledge, patience, and support throughout the process were unmatched. I’m thrilled with my new home!",
    rating: 5,
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ testimonial }) => (
  <div className="p-4 bg-white mx-auto shadow-lg border rounded-md  md:w-[350px] max-w-[400px] h-[420px] sm:h-[380px]">
    <div className="text-2xl text-themeText mb-2">“</div>
    <p className="mb-4 h-[200px]">{testimonial.text}</p>
    <div className="flex items-center mt-auto">
      <FaUserCircle className="text-[52px]" />
      <div className="ml-2">
        <h3 className="font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 1,
        },
        1280: {
          slidesPerView: 2,
        },
      }}
      speed={3000}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="slider_main relative h-[450px] w-full"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        enable: true,
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
