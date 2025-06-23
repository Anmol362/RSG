import React, { useEffect, useRef } from "react";
import styles from './hero-section.module.css';
const HeroSection = () => {

  return (
    <>
      <section className="w-full max-w-[1920px] min-h-[700px] h-auto relative bg-[#6E00FF]/10 overflow-hidden ">
      {/* <span className="bg-red-400 w-[60px] h-[60px] hidden md:flex rounded-full absolute overflow-hidden top-[350px] left-[50px] border border-themeText  ">
        <img src="/images/hero_home.png" alt="" className="w-full h-full object-cover"/>
      </span> */}
      {/* <span className= {`w-[60px] h-[60px] rounded-full absolute top-[150px] left-[50px] hidden md:flex ${styles.small_half_img}`}>
        <span className="bg-themeText w-full top-0 left-0  z-[2] h-[50%] rounded-none absolute rounded-t-full "></span>
        <span className="h-[30px] block border border-themeText overflow-hidden w-full mt-[31px] rounded-b-full">
          <img src="/images/hero_home.png" alt="" className="w-full h-full object-cover"/>
        </span> */}
        
      {/* </span> */}
        <div className="w-full h-full ">
          <div className={` flex-center text-center sm:mt-[60px] mt-[100px] text-[60px] z-10 ${styles.headingText}`}>
            <h1 className="font-medium text-[32px] sm:text-[52px] uppercase">
              <span>Finding property?</span>
            <b className="font-bold ">Let us
            <span className="text-themeText"> help!</span></b>
            </h1>
          </div>
          <div className={`w-full pt-[100px] absolute bottom-0 z-10 h-[650px] ${styles.img_container}`}>
            <img
              src="/images/hero_home-removebg-preview.png"
              alt="Hero Section"
              className="lg:w-full object-fill lg:h-full w-full sm:h-[500px] xsm:h-[400px] h-[300px] xsm:mt-0 mt-[50px] relative z-10 "
            />
          </div>
        </div>
        {/* <span className="bg-red-400 w-[60px] h-[60px] rounded-full absolute overflow-hidden top-[350px] right-[50px] border border-themeText">
        <img src="./images/hero_home.png" alt="" className="w-full h-full object-cover"/>
      </span> */}
      {/* <span className={`w-[60px] h-[60px] rounded-full absolute top-[150px] right-[50px] hidden md:flex ${styles.small_half_img}`}>
        <span className="bg-themeText w-full top-0 left-0  z-[2] h-[50%] rounded-none absolute rounded-t-full translate-x-4"></span>
        <div className="h-[30px] block border border-themeText overflow-hidden w-full mt-[31px] rounded-b-full">
          <img src="/images/hero_home.png" alt="" className="w-full h-full object-cover"/>
        </div>
        
      </span> */}
      </section>
    </>
  );
};

export default HeroSection;
