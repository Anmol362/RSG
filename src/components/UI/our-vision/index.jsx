import React from "react";
import styles from "./styles.module.css";

const OurVision = () => {
  return (
    <>
      <div
        className={`${styles.visionMission} flex justify-center items-center mb-5`}
      >
        <div className={`${styles.innervisionmission} w-screen max-w-[1920px]`}>
          <div
            className={`${styles.vision} flex items-center justify-center flex-col lg:flex-row min-h-[450px] gap-[35px] px-[20px] py-[20px] mt-[30px]`}
          >
            <div
              className={`${styles.vision_img} order-1`}
              data-aos="fade-right"
            >
              <h1
                className={`${styles.mision_heading} w-full text-center uppercase visible mb-4 lg:hidden ${styles.vision_heading}`}
              >
                <b className="w-full text-center uppercase text-[35px] font-bold">
                  our vision
                </b>
              </h1>
              <img
                src={"https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750168206/e2-brochure-golden-correction-c2c-x62_m2owde.jpg"}
                alt="about"
                loading="lazy"
                className="w-full h-full md:h-[300px] rounded-lg"
              />
            </div>
            <div
              className={`${styles.vision_content} order-2 flex items-center h-full flex-col w-full lg:w-[50%] lg:pt-[50px]`}
              data-aos="fade-left"
            >
              <h1
                className={`${styles.vision_heading} w-full text-center uppercase text-[35px] font-bold hidden lg:inline`}
              >
                our vision
              </h1>
              <p
                className={`${styles.vision_peragraph} w-full text-center text-base md:w-[60%]`}
              >
                Our commitment includes developing standards, promising total
                client satisfaction, providing a diverse range of design
                choices.
              </p>
            </div>
          </div>
          <div
            className={`${styles.vision} flex items-center flex-col lg:flex-row min-h-[350px] gap-[35px] px-[20px]`}
          >
            <div
              className={`${styles.vision_img} lg:order-2`}
              data-aos="fade-left"
            >
              <h1
                className={`${styles.mision_heading} w-full text-center text-uppercase visible mb-4 lg:hidden ${styles.vision_heading}`}
              >
                <b className="w-full text-center uppercase text-[35px] font-bold">
                  our Mission
                </b>
              </h1>
              <img
                src={"https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750168206/e2-brochure-golden-correction-c2c-x62_m2owde.jpg"}
                alt="about"
                loading="lazy"
                className="w-full h-full md:h-[300px] rounded-lg"
              />
            </div>
            <div
              className={`${styles.vision_content} order-1 flex items-center h-full flex-col w-full lg:w-[50%] lg:pt-[10px]`}
              data-aos="fade-right"
            >
              <h1
                className={`${styles.vision_heading} w-full text-center uppercase text-[35px] hidden lg:inline font-bold`}
              >
                our Mission
              </h1>
              <p
                className={`${styles.vision_peragraph} w-full text-center text-base md:w-[60%]`}
              >
                Our commitment as a real estate company includes upholding the highest standards, ensuring total client satisfaction, offering a diverse portfolio of properties, guaranteeing timely and cost-effective transactions, and providing a wide range of design and customization options to meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
