
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import 'aos/dist/aos.css';

import React from 'react';

import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Swiper navigation module styles
import 'swiper/css/pagination';
import FeatureProjects from './pages/featured-projects';


const router=createBrowserRouter([{
  path:'/',
  element:<MainLayout/>,
  children:[{
    path:"/",
    element:<Home/>,
  },{
    path:"/about",
    element:<About/>,
  },{
    path:"/our-projects",
    element:'',
  },{
    path:"/our-services",
    element:'',
  },{
    path:"/contact",
    element:<Contact/>,
  },{
    path:"/feature-projects",
    element:<FeatureProjects/>,
  }]
}])

function App() {

  



  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
