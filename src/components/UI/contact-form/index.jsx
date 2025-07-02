import Aos from "aos";
import React, { useEffect, useState } from "react";





const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  useEffect(() => {
      Aos.init({
        duration: 2000,
        once: true,
      });
    }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-full sm:min-h-screen  bg-white w-full pb-8">
      <div className="w-[96%] h-full flex shadow-md lg:mt-0 mt-32 border rounded-lg flex-col lg:flex-row max-w-[1920px]">
        <div className="lg:w-1/2 w-full hidden justify-center items-center mb-8 lg:mb-0 sm:flex"  data-aos="fade-left">
          <img src="/images/contact.svg" alt="Contact Us" className="w-1/2" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 w-full  p-8 rounded-lg "  data-aos="fade-right"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get in touch
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-themeText hover:bg-themeText text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[120px]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
