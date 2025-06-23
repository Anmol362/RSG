// src/IntroPage.js
import React from "react";
// Ensure you have imported the Tailwind CSS styles

const IntroPage = () => {
  return (
    <div className="min-h-[550px] h-auto w-full flex flex-col items-center justify-center bg-gradient-to-r from-themeText to-orange-500 px-1 py-1">
      <div className="bg-white shadow-lg rounded-lg max-w-full h-[98%] w-full p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4"  data-aos="fade-up">
          Introduction to <span className="text-themeText"> RS Group</span>
        </h1>
        <img
          src="https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750168991/empressia_u4mjbe.jpg"
          alt="Intro Image"
          className="w-full h-60 object-cover rounded-lg mb-4"
          data-aos="fade-up"
        />
        <div className="text-gray-700 text-justify flex justify-between gap-[35px] w-full text-[14px] flex-wrap overflow-hidden">
          <div className="flex flex-col gap-[10px] w-full md:w-[48%]">
            <span data-aos="fade-up">A vision to address the needs and dreams of people led to the formation of RS Group in the year 1997.</span>
            <span className="block text-wrap h-auto" data-aos="fade-up">
              SHRI KHUSSHIRAM KUNDNANI led the organisation with his inspiring leadership to bring high value services in Automotive, Retail and Real Estate business.
            </span>
            <span className="block text-wrap h-auto" data-aos="fade-up">
              The approach let to its first establishment, R.S AUTOMOBILES, a multibrand two wheeler automobile company, located at TILDA, Chhattisgarh. It gained a huge appreciation, reaching the demands of people who intensely needed something within their reach, rather travelling long distances to buy vehicles. R S Automobiles heard these needs and achieved a great sales figure by providing the vehicles in easy instalment schemes. Thereafter, the group added more businesses to its portfolio and thus started the emergence of R S CAR WORLD PVT. LTD., RS FINANCE SERVICE, RS DREAMLAND PVT. LTD., and E-GRACE INFRA VENTURE.
            </span>
            <span className="block text-wrap h-auto" data-aos="fade-up">
              The Group gained momentum with many a new ventures and projects. All of which were highly inspired and strongly supported by the Group President SHRI KISHORE KUNDNANI. Every motive of RS business is inclined to provided quality services and products with much ease and affordability for the customers. If it's a real estate projects, the group introduces many easy finance schemes to enable a common man to achieve their dreams. For Vehicle segment, specifically Commercial Vehicle and Car Finance, it's a 'CAN DO' inspiration for many transporters and Fleet owners. FRESHICA MULTITRADE & INFRA is continuously working towards bringing the best known Retail and Merchandising brands to the city and nearby towns.
            </span>
          </div>
          <div className="flex gap-[10px] text-[14px] flex-col w-full md:w-[48%]">
            <span className="block text-wrap h-auto" data-aos="fade-up">
              Considering Rapid growth with real estate & infra Developments in rising Chhattisgarh State during 2004, R.S. GROUP involved itself as an investor group to contribute towards the "MY HOME" Dream of the people.
            </span>
            <span className="block text-wrap h-auto" data-aos="fade-up">
              Diversifying the Group's business in Real Estate, Automotive Services and residential projects, the firm holds a large amount of faith and appreciation from its Customer Base of about 50,000 satisfied customers. Nevertheless, the group is known for its high value in terms of execution, quality construction and continuous support for its customers, it's also a friendly hand to all our business partners who were with RS in all their vital efforts.
            </span>
            <span className="block text-wrap h-auto" data-aos="fade-up">
              Continuing the legacy of highly appreciated residential project, Empressia, this is a new elite edition to the series by enhancing to a new level. It was highly anticipated and most awaited project in this exquisite location. Empressia Elite, (E2), is the first tallest residential building in the locality, adjoining to the most prestigious township by RDA-Kamal Vihar. Its virtue lies in the fact that again a Luxury and Elite edition is being provided to people with much ease of Finances.
            </span>
            <span className="block text-wrap h-auto" data-aos="fade-up">
              We hold the right to fascinate our customers and E2 is just the mark of a new beginning.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
