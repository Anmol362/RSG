import React from "react";
import OurPartners from "../components/UI/our-partners";
import IntroPage from "../components/UI/aboutus/intro";
import AboutSlider from "../components/UI/aboutus/about_slider";
import OurVision from "../components/UI/our-vision";
import SubBranch from "../components/UI/sub-branch";

const About = () => {
  return (
    <div className="flex-center flex-col w-full overflow-hidden">
      <AboutSlider />
      <IntroPage />
      <div className="flex-center flex-col py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          Other <span className="text-themeText"> Businesses</span>
        </h1>
        <SubBranch
          heading="RS Automobiles "
          reverse={false}
          content="R.S Automobiles is a trusted and renowned multibrand two-wheeler automobile company, proudly serving the people of Tilda, Chhattisgarh. Established with a vision to cater to the growing needs of the local community, R.S Automobiles has become a household name in the region. The company recognized the challenges faced by residents who had to travel long distances to purchase their vehicles, often at the cost of time, money, and convenience. By bringing a wide range of high-quality two-wheelers closer to home, R.S Automobiles addressed this pressing demand and quickly gained immense appreciation and trust within the community.<br/>The company's success is not only rooted in offering exceptional products but also in its customer-centric approach. Understanding that affordability is a key factor for many, R.S Automobiles introduced easy installment schemes, enabling customers to fulfill their dream of owning a vehicle without financial strain. This initiative significantly boosted accessibility and helped the company achieve remarkable sales milestones, cementing its reputation as a reliable and innovative automobile provider."
          image='/images/automobile.webp'
        />
        <SubBranch
          heading="RS Finance "
          reverse={true}
          image='/images/finance.jpg'
          content="R.S Finance Services is a trusted name in financial solutions, specializing in home loans and two-wheeler loans that make your dreams more accessible. Located in Tilda, Chhattisgarh, we understand the unique needs of our community and are committed to providing financial support that’s both reliable and customer-friendly.<br/>Whether you’re planning to buy your first home or upgrade your two-wheeler, our tailored loan solutions are designed to make the process easy and stress-free. Our home loans offer competitive interest rates, flexible repayment options, and quick approvals, helping families turn their dream of owning a home into a reality. For individuals seeking affordable and efficient transportation, our two-wheeler loans ensure you can ride your way to independence with ease.<br/> At R.S Finance Services, we believe in simplifying financial processes and putting our clients first. Our dedicated team ensures a seamless experience from application to approval, providing personalized guidance every step of the way. Backed by the trust and legacy of the R.S Group, we are proud to be a partner in helping you achieve your goals, whether it’s securing a place to call home or enhancing your mobility with a new two-wheeler."
        />
      </div>
      <OurVision />
      <OurPartners />
    </div>
  );
};

export default About;
