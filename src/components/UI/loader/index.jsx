// src/components/SplashScreen.js
import React from 'react';
import styles from './loader.module.css';
const SplashScreen = () => (
  <div className={`fixed inset-0 flex-center bg-white z-50 top-0 left-[100%] w-full ${styles.loader_conatiner}`}>
    <div className={`text-3xl font-bold h-full flex-center ${styles.innr_loader}`}>
        <img src="/images/back-jcb_1.gif" alt="loading" className='w-[100px] scale-150 h-[100px]'/>
        
    </div>
  </div>
);

export default SplashScreen;