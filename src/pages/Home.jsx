import React from 'react'
import Navbar from '../components/navbar/Navbar';
import '../components/landingPage.css'
import ContactNav from '../components/navbar/ContactNav';
import MenuNav from '../components/navbar/MenuNav';
import Slider from '../components/slider/Slider';
import Service from '../components/categories/Service'
import Feature from '../components/categories/Feature';
import Popular from '../components/categories/Popular';
import ImgLayout from '../components/categories/ImgLayout';
import Reviews from '../components/review/Reviews';

const Home = () => {
  return (
    <div>
      <ContactNav/>
      <Navbar/>
      <MenuNav/>
      <Slider/>
      < Service />
      <Feature/>
      <Popular/>
      <ImgLayout/>
      <Reviews/>
    </div>
  
  )
}

export default Home;

// {(() => {
//   if (item.icon === "5star") {
//     return (
//       <Five/>
//     )
//   } else if (item.icon === "4star") {
//     return (
//      <Four/>
//     )
//   } else {
//     return (
//       <Three/>
//     )
//   }
// })()}