// src/components/RealEstateBrokerage.js
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const RealEstateBrokerage = () => {
  const { ref: leftSectionRef, inView: leftSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: rightSectionRef, inView: rightSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: customersRef, inView: customersInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: officesRef, inView: officesInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: societiesRef, inView: societiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-[50px] max-w-[1920px] w-full">
      <div className="rounded-lg overflow-hidden w-full md:flex">
        <div
          ref={leftSectionRef}
          className={`md:w-1/2 p-8 flex flex-col gap-[30px] transition-opacity duration-1000 ${
            leftSectionInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-gray-600 uppercase tracking-widest mb-2 font-semibold text-themeText">
            Modern solutions for modern era
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 py-2">
            We are a boutique real estate brokerage in Raipur
          </h1>
          <p className="text-gray-600 mb-6">
            At RSG, we specialize in connecting clients with premium properties
            in Raipur. Whether you're looking for your dream home or a smart
            investment opportunity, our expert team ensures a seamless and
            personalized experience tailored to your needs.
            <br />
            With a deep understanding of Raipur's thriving real estate market,
            we offer unmatched insights and dedicated service to help you make
            the best decisions. Your next move starts here.
          </p>
          <div className="flex space-x-4 mb-8 w-full flex-center">
            <a href="tel:+919165957070" className=" bg-btn-color text-white px-4 py-2 rounded">
            Get started now
            </a>
            {/* <button className="border border-black text-black px-4 py-2 rounded">Read More</button> */}
          </div>
          {/* <div className="flex justify-around">
            <div className="text-center" ref={customersRef}>
              <p className="text-3xl font-bold">
                {customersInView && <CountUp end={12} duration={2} />}+
              </p>
              <p className="text-gray-600">Happy Clients in Raipur</p>
            </div>
            <div className="text-center" ref={officesRef}>
              <p className="text-3xl font-bold">
                {officesInView && <CountUp end={14} duration={2} />}+
              </p>
              <p className="text-gray-600">Beautiful Homes Listed</p>
            </div>
            <div className="text-center" ref={societiesRef}>
              <p className="text-3xl font-bold">
                {societiesInView && <CountUp end={10} duration={2} />}+
              </p>
              <p className="text-gray-600">Prestigious Societies Partnered</p>
            </div>
          </div> */}
        </div>
        <div
          ref={rightSectionRef}
          className={`md:w-1/2 flex items-center justify-center transition-opacity duration-1000 min-h-[500px]  ${
            rightSectionInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750168630/portrait-male-real-estate-agent_z574f2.jpg"
            alt="Real Estate"
            className={`w-full h-full object-cover rounded-[8px] lg:object-right object-center `}
          />
        </div>
      </div>
    </div>
  );
};

export default RealEstateBrokerage;
