import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-btn-color text-white py-8 px-4 flex-center flex-col">
      {/* <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          <img src="/path/to/logo.png" alt="RSG Real Estate" className="mb-4" />
          <p className="mb-4">
            Our experts can provide valuable insights and assist you in identifying properties.
          </p>
          <div className="flex space-x-4">
            <FaInstagram className="w-6 h-6 cursor-pointer" />
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaYoutube className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Product</h3>
          <ul>
            <li className="mb-1">Features</li>
            <li className="mb-1">Integrations</li>
            <li className="mb-1">Pricing</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul>
            <li className="mb-1">About us</li>
            <li className="mb-1">Blog</li>
            <li className="mb-1">Careers</li>
            <li className="mb-1">Customers</li>
            <li className="mb-1">Brand</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Resources</h3>
          <ul>
            <li className="mb-1">Community</li>
            <li className="mb-1">Contract</li>
            <li className="mb-1">DPA</li>
            <li className="mb-1">Terms of services</li>
          </ul>
        </div>
      </div> */}
      <div className=" text-brown-700 py-6 max-w-[1920px]">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Booking Info */}
          <div className="">
            <div className="col-span-1 md:col-span-1 flex flex-col items-start">
              <div className="bg-white flex items-center justify-center mb-4">
                <img
                  src="/images/logo/logo_2.png"
                  alt="RSG Real Estate"
                  className=" w-[150px] h-[70px]"
                />
              </div>
              <p className="mb-4">
                Our experts can provide valuable insights and assist you in
                identifying properties.
              </p>
              <div className="flex space-x-4">
                <FaInstagram className="w-6 h-6 cursor-pointer" />
                <FaFacebook className="w-6 h-6 cursor-pointer" />
                <FaYoutube className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
            <h2 className="text-lg font-bold mt-[25px]">
              For Bookings & Enquiries
            </h2>
            <a href="tel:+919165957070" className="mt-2 text-brown-700">
              +91 91659 57070
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="flex flex-col">
              <a href="/about-us" className="mb-1 text-white">
                About us
              </a>
              <a href="/contact" className="mb-1">
                Contact us
              </a>
              <a href="/feature-projects" className="mb-1">
                Featured Project
              </a>
            </ul>
          </div>

          {/* Marketing Associate */}
          <div className="">
            {/* Architectural Consultant */}
            <div className="">
              <h2 className="text-lg font-bold mb-2">Featured Projects</h2>
              <ul className="flex flex-col">
                <a href="./pdfs/E2_EMPRESSIA_E_BROUCHER.pdf" target="_blank" className="mb-1 capitalize text-white">
                  Empressia Elite
                </a>
                <a href="./pdfs/Royal_avenue_brochure.pdf" target="_blank" className="mb-1 capitalize">
                  royal avenue
                </a>
                <a href="./pdfs/ARANYA_LAKE_SHORE_CITY_LEAFLATE.pdf" target="_blank" className="mb-1 capitalize">
                  Aranya Lake Shore City
                </a>
                <a href="./pdfs/rosbey_greens.pdf" target="_blank" className="mb-1 capitalize">
                  Rosbey Greens
                </a>
                <a href="./pdfs/brochure_pargati_peral_1.pdf" target="_blank" className="mb-1 capitalize">
                 Swastik pragati pearl
                </a>
              </ul>
            </div>
          </div>

          {/* Associate Partners */}
          <div className="">
            <h2 className="text-lg font-bold">Associate Partners</h2>
            <p>Shri Swastik Group</p>
            <p>A hallmark of trust & excellence</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-brown-600 mt-6">
          <p>
            The plans, specifications, images and other details herein are only
            indicative and the Owner reserves its right to change any or all of
            these in its directions, subject to grant of approvals from the
            relevant authorities. This written material does not constitute an
            offer, an invitation to an offer and/or commitment of any nature
            between the Developer and the recipient. The Developer and/or
            Owner’s website(s) and other advertising and publicity material(s)
            include Artist’s impressions indicating the anticipated appearance
            of the completed development. No warranty is given that the
            completed development will comply in any degree with such Artist’s
            impressions. Amenities, costs, designs and facilities and/or
            specifications may be subject to change without notice.
          </p>
        </div>
      </div>
      <div className=" w-full mx-auto max-w-[1920px] mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-1">
          <p className="text-sm">&copy; 2025 RSG. All rights reserved.</p>
          <a href="/" className="text-sm">
            Terms & Condition
          </a>
        </div>
        <div className="flex">
          <p>
            Developed by{" "}
            <a
              className="text-blue-500 text-sm"
              target="_blank"
              href="https://schoolonedtech.com/"
            >
              SchoolOn Education Technology Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
