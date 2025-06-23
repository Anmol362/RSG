// src/App.jsx
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubBranch = ({heading,content,reverse,image}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="text-center p-4 flex-center">
      {/* Main Section */}
      <div className="p-6 max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Content */}
          <div className={`p-6 text-left shadow-md ${reverse?'order-2':'order-1'}`} data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-4">{heading}</h2>

            <div className="mb-6 text-justify">          
              {content.split('<br/>').map(item=>{
                return <p className="mt-1">{item}</p>
              })}
            </div>           
          </div>

          {/* Right Content */}
          <div className={`text-center  flex flex-col items-center shadow-md ${reverse?'order-1':'order-2'}`} data-aos="fade-left">
            <img src={image} className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBranch;
