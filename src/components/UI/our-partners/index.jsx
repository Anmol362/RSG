// src/App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPartners = () => {
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
          <div className="px-6 text-left shadow-md" data-aos="fade-right">
            <h2 className="text-xl font-bold mb-4">Associate Partners</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold uppercase">
                Shri Swastik Group
              </h3>
              <p className="text-sm mt-2 uppercase">
                A hallmark of trust & excellence
              </p>
              <p className="mt-2 text-sm">
                One of the most popular and trusted name "Shri Swastik" in a
                short span of time, one of the fastest growing innovators in the
                fastest growing real estate sector of Chhattisgarh, is striving
                to provide a comfortable and lavish lifestyle with the
                experience of our team of skilled professional construction
                experts.
              </p>
              <p className="mt-2 text-sm">
                Over the years, it has been known for Aesthetics, Innovation,
                Quality and Timely Delivery, values that have build lasting
                relationships.
              </p>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold">Nivesh Well</h3>
              <p className="text-sm mt-2">INVESTING TRUST, QUALITY AND ASSURANCE IN EVERY PROJECT</p>
              <p className="mt-2 text-sm">
                Today where a majority of investment firms evaluate real estate projects on the basis of profitability, Niveshwell believes in investing in real estate projects that focus on quality. This fact alone distinguishes Niveshwell as a credible name among customers and industry experts.
              </p>
              <p className="mt-2 text-sm">
                Supported by a team of young and dynamic engineers, CAS, and MBAs, Niveshwell under the leadership of Mr. Sunil Shahu and Mr. Manoj Shahu are first-generation entrepreneurs with over two decades of experience.
              </p>
            </div> */}
          </div>

          {/* Right Content */}
          <div
            className="text-center flex flex-col items-center shadow-md"
            data-aos="fade-left"
          >
            <img
              src="https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750168196/e2-brochure-golden-correction-c2c-x6111_twdxjb.jpg"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
