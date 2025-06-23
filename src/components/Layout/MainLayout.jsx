import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import SplashScreen from '../UI/loader'

const MainLayout = () => {
 
  return (
    <>    
    
    <Header/>
    <Outlet/>
    <Footer/>   
    </>
  )
}

export default MainLayout