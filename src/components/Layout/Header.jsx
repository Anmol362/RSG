import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosCall } from 'react-icons/io';
import styles from './styles.module.css';
import SplashScreen from '../UI/loader';

const Header = () => {
  const [showSplash, setShowSplash] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

 const handleNavigation = (path) => {
    setShowSplash(true);
    setTimeout(() => {
      navigate(path);
    }, 1000);

    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  };

  // Check if the current path is the home page
  const isHomePage = location.pathname === '/';

  return (
    <>
      {showSplash && <SplashScreen />}
      <nav
        className={`absolute h-[100px] w-full flex-center z-50 overflow-hidden ${!isHomePage ? 'bg-white bg-opacity-60' : ''
          }`}
      >
        <div className={`flex items-center h-full w-[95%]  md:px-[25px]  max-w-[1920px]`}>
          <div className={`text-[35px] font-semibold`}>
            <button
              onClick={() => handleNavigation('/')}
              className='text-[35px] font-semibold'
            >
               <img src='/images/logo/logo_2.png' alt="logo" className='w-[50px] sm:w-[70px] sm:h-[40px] h-[40px]'/>
            </button>
          </div>
          <ul className={`flex gap-[10px] xsm:gap-[20px] sm:gap-[40px] ml-auto`}>
            <li
              className={`${styles.single_nav} hover:bg-themeText p-1 px-2 rounded-lg group hover:text-white`}
              style={{ '--i': '1' }}
            >
              <button
                onClick={() => handleNavigation('/feature-projects')}
                className='text-[12px] sm:text-[14px] font-bold'
              >
                Featured projects
              </button>
            </li>
            <li
              className={`${styles.single_nav} hover:bg-themeText p-1 sm:px-2 rounded-lg group hover:text-white ${location.pathname==='/about'?'bg-themeText text-white':'bg-transparent'}`}
              style={{ '--i': '2' }}
            >
              <button
                onClick={() => handleNavigation('/about')}
                className='text-[12px] text-nowrap sm:text-[14px] font-bold'
              >
                About us
              </button>
            </li>
            <li
              className={`${styles.single_nav} hover:bg-themeText p-1 xsm:px-2 rounded-lg group hover:text-white ${location.pathname==='/contact'?'bg-themeText text-white':'bg-transparent'}`}
              style={{ '--i': '3' }}
            >
              <button
                onClick={() => handleNavigation('/contact')}
                className='text-[12px] sm:text-[14px] font-bold'
              >
                Contact
              </button>
            </li>
          </ul>
          <button
            onClick={() => (window.location.href = 'tel:+919165957070')}
            className={`${styles.call_btn} flex-center gap-[5px] xsm:ml-[20px] sm:ml-[45px] ml-[5px] bg-btn-color rounded-[20px] px-4 py-1 text-white`}
          >
            <IoIosCall className='sm:text-[20px]' />
            <span className='block text-[10px] sm:text-[14px]'>Call Us</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
