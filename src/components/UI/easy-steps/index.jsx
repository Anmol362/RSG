import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaQuestionCircle, FaClipboardList, FaUserCheck } from 'react-icons/fa'; // Use any icons you like

const EasySteps = () => {
  useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-gray-600 uppercase tracking-widest mb-2 font-semibold text-themeText"  data-aos='fade-up'>3 steps towards the perfect match.</h2>
        <h1 className="sm:text-4xl text-3xl font-bold mb-12" data-aos='fade-up'> Finding the right property is this <span className='text-themeText uppercase'>Easy.</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
          <div className="flex flex-col items-center"  data-aos='fade-right'>
            <FaQuestionCircle className="text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Book a call </h3>
            <p className="text-gray-600">Share your preferences, big or small. Whether it's the number of bedrooms, a specific neighborhood, or a desired budget, just tell us what you're looking for. We'll handle the search, sifting through listings and finding properties that truly match your unique needs and desires.</p>
          </div>

          <div className="flex flex-col items-center" data-aos='fade-up'>
            <FaClipboardList className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Talk to our experts</h3>
            <p className="text-gray-600">Provide contact details for a personalized consultation. Once we have your information, our seasoned real estate professionals will reach out to discuss your options in depth. Get expert guidance every step of the way, from market insights to financing tips, ensuring you make informed decisions.</p>
          </div>

          <div className="flex flex-col items-center " data-aos='fade-left'>
            <FaUserCheck className="text-5xl text-purple-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Visit the property</h3>
            <p className="text-gray-600">Relax while we arrange viewings. We'll coordinate all the details, scheduling tours at your convenience and providing all the necessary information. Step into your potential new property with confidence, knowing that we've streamlined the process to make your search enjoyable and stress-free.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EasySteps;
