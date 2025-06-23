import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'
import { whyChooseData } from './why-choose';



const WhyChooseUs = () => {
  

  return (
    <div className={`${styles['why-choose-us']} flex-center w-full`}>
      <div className={`${styles['inner_why-choose-us']}  flex-center max-w-[1540px]`}>
        <div className={`${styles['why-choose-us-2']}`}>WHY CHOOSE US</div>
        <p className={`${styles['text-wrapper-15']}`}>
        When it comes to choosing the perfect property for your home or business, we understand the variety of options available to you. Here’s why we believe our real estate agency stands out from the rest:
        </p>
        <div className={`${styles['choose_card_container']}`}>
          {whyChooseData?.length > 0 &&
            whyChooseData.map((item, index) => (
              <div className={`${styles['ordr_card-designs']} rounded-[10px]`} key={index}>
                <div className={`${styles['card-img']} flex-center`}>
                  <img
                    width={90}
                    height={90}
                    className={`${styles['card_image']} w-[90px] h-[90px]`}
                    alt={item.alt}
                    src={item.imgsrc}
                  />
                  <div className={`${styles['card_content']}`}>{item.title}</div>
                </div>
                <p className={`${styles['text-wrapper-17']}`}>{item.details}</p>
              </div>
            ))}
        </div>
      </div>
      <p className={`${styles['text-wrapper-15']}`}>
      We are confident that our commitment to excellence, deep market expertise, and exceptional client service set us apart from the competition. Contact us today to learn more about how we can help you find the perfect property to meet your real estate needs!
      </p>
      <a href='/contact' className={` flex-center p-2 mt-5 rounded-[5px] border border-themeText hover:bg-themeText hover:text-white`}>
        Get Started
      </a>
    </div>
  );
};

export default WhyChooseUs;
