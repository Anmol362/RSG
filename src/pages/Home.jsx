import React from "react";
import HeroSection from "../components/UI/hero-section";
import { HomeSolutions } from "../components/UI/home-solution";
// import { BigProjects } from "../components/UI/our-big-projects";
import EasySteps from "../components/UI/easy-steps";
import RealEstateBrokerage from "../components/UI/real-state-brockerage";
// import RealAppraisalServices from "../components/UI/real-appraisal-service";
import Testimonial from "../components/UI/testimonials";
import ProjectSlider from "../components/project-slider";
import { useEffect } from "react";
import SplashScreen from "../components/UI/loader";
import { useState } from "react";
// import WhyChooseUs from "../components/UI/why-choose-us";
import OurPartners from "../components/UI/our-partners";
import ContactForm from "../components/UI/contact-form";

const Home = () => {
  const [showSplash, setShowSplash] = useState(false);
  const handleSplash = () => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  };
  useEffect(() => {
    handleSplash();
  },[]);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="w-full flex items-center flex-col overflow-hidden">
          <HeroSection />
          <HomeSolutions />
          {/* <BigProjects /> */}
          <EasySteps />
          <RealEstateBrokerage />
          <ProjectSlider />
          {/* <RealAppraisalServices /> */}
          <Testimonial />
          {/* <WhyChooseUs/> */}
          <OurPartners/>
          <ContactForm />
        </div>
      )}
    </>
  );
};

export default Home;
