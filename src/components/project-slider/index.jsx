import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";



export const featureProject = [
  {
    _id: "01",

    title: "Empressia Elite",

    description:
      "Complementing sheer modernism and minimal architecture, E2 sits on an exquisite location, a central hub which connects Naya Raipur to Old Raipur. Explicitly, its going to be the most desirable place for a home in Raipur for the reason being, the most awaited township, KAMAL VIHAR is just a neighbour to E2; And for more score, adjoining to the most premium sector of KAMAL VIHAR,",
    image: "https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750168206/e2-brochure-golden-correction-c2c-x62_m2owde.jpg",
    link: "./pdfs/E2_EMPRESSIA_E_BROUCHER.pdf",

  },
  {
    _id: "02",

    title: "ROYALE AVENUE",

    description:
      "Strategically located on the Vidhan Sabha marg. Royale Avenue is the very first residential scheme along this stretch, the city centre, renowned educational institution,the city’s finest entertainment destinations, workplaces or healthcare facilities, Royale Avenue is ideally lo",
    image: "https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750169231/Screenshot_2025-06-17_193654_huacrp.png",
    link: "./pdfs/Royal_avenue_brochure.pdf",
  },
  {
    _id: "03",

    title: "Aranya Lake Shore City",

    description:
      "Lake shore city is designed to offer a harmonious blend of luxury and nature, making it the perfect escape from the hustle and bustle of daily life. With its stunning amenities, serene gardens, and the beautiful backdrop of the lake, this living resort is truly a haven of peace and relaxation. Whether you're seeking adventure or a quiet retreat, your idyllic lifestyle awaits!",
    image: "https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750169777/Screenshot_2025-06-17_194559_g9nl5o.png",
    link: "./pdfs/ARANYA_LAKE_SHORE_CITY_LEAFLATE.pdf",
  },
  {
    _id: "04",
    title: "Rosbey Greens",
    description:
      " A township in Raipur. It features a Proposed Residential Layout Plan with detailed Each Plot Area Details.",
    image: "https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750169937/28d98049-82ea-48d4-a592-e70adff0f446.png",
    link: "./pdfs/rosbey_greens.pdf",
  },
  {
    _id: "05",
    title: "SWASTIK PRAGATI PEARL",
    description:
      "Shri Swastik Group Present PRAGATI PEARL immerse yourself in happiness with abundant lifestyle facilities, outdoor activities & daily conveniences. Experience Happiness Unlimited! Pragati Pearl is located in Bhatagaon in a convenient and easy access by road transport location, densely populated all around and a few distance away from the well developed shopping market, school, hospital bus stand. Pragati Pearl is where you find a ultimate reflection of the urban elegant lifestyle where one can enjoy a life of luxury. there are 2 BHK & 3 BHK Flats available with world-hi-class facilities and amenities with spacious and luxurious flats under an affordable budget and transforming dreams into reality.",
    image: "https://res.cloudinary.com/dbaoxqzl6/image/upload/v1750176282/9e4b7f37-4dca-4baa-9844-1634f0a1f082.png",
    link: "./pdfs/brochure_pargati_peral_1.pdf",
  },
];

const ProjectSlider = () => {
  
  // const [previousCard, setPreviousCard] = useState(null);
  // const setActive = (data) => {
  //   setAllData(allData.filter((item) => item._id !== data?._id));

  //   if (previousCard !== null) {
  //     console.log(previousCard);
  //     setAllData((prev) => [...prev, previousCard]);
  //   }
  //   setPreviousCard(data);
  //   setActiveCard(data);
  // };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col items-center w-full max-w-[1920px] mx-auto px-6 py-[50px]">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-themeText uppercase font-semibold">
          YOUR NEXT INVESTMENT
        </h2>
        <h1 className="text-[45px] font-bold max-w-[550px] w-full">
          Top <span className="text-themeText">Featured Projects </span>{" "}
        </h1>
      </div>
      <div className="w-full mt-6" data-aos="fade-up">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          speed={8000}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            enable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {featureProject.map((rental, index) => (
            <SwiperSlide
              key={index}
              // onClick={() => setActive(rental)}
              // className="cursor-pointer"
            >
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <img
                  src={rental.image}
                  alt={rental.title}
                  className="rounded-lg w-full h-[350px] object-cover"
                />
                <h3 className="mt-4 ml-2 font-semibold">
                  <span className=" text-xl uppercase">
                     {rental.title}
                  </span>
                 
                </h3>
                <p className="mt-2 ml-2 text-gray-600 line-clamp-4">
                  {rental?.description}
                 
                </p>
                <a href={rental.link} target="_blank" className='mt-4  ml-2 inline-block text-themeText hover:text-white hover:bg-themeText p-2 rounded-lg transition-all'>
                  Watch More &rarr;
                </a>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex space-x-4 mb-8 w-full flex-center my-4">
          <a
            href="tel:+919165957070"
            className=" bg-btn-color text-white px-4 py-2 rounded"
          >
            Book a visit now
          </a>
          {/* <button className="border border-black text-black px-4 py-2 rounded">Read More</button> */}
        </div>
      </div>
      {/* {activeCard && (
        <div className="flex-center w-full mt-[50px]">
          <div className="md:w-[60%] w-full  bg-btn-color/80">
          <div>
          <h3>3 BHK</h3>
          <p className="uppercase">Chargeable area</p>
          <p className="uppercase">1465 sq.ft.</p>
          <ol className="text-left max-w-[300px] w-full mt-[50px] ml-[50px]">
            <li className="flex-between px-2 bg-white py-[5px] my-[3px]" ><p>Drawing Room</p><p className="ml-auto">120" x 11'0"</p></li>
            <li className="flex-between px-2 bg-white py-[5px]"><p>Puja</p><p className="ml-auto">3'4" x 5'6"</p></li>
            <li className="flex-between px-2 bg-white py-[5px] my-[3px]" ><p>Drawing Room</p><p className="ml-auto">120" x 11'0"</p></li>
            <li className="flex-between px-2 bg-white py-[5px]"><p>Puja</p><p className="ml-auto">3'4" x 5'6"</p></li>
          </ol>
          </div>
         
          </div>
          <div className="md:w-[40%] w-full  bg-btn-color/80">
          <h3>3 BHK</h3>
          <p className="uppercase">Chargeable area</p>
          <p className="uppercase">1465 sq.ft.</p>
          </div>
        </div>
      )} */}
    </section>
  );
};
export default ProjectSlider;
