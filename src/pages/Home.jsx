import React from 'react'
import Navbar from '../components/navbar/Navbar';
import '../components/landingPage.css'
import ContactNav from '../components/navbar/ContactNav';
import MenuNav from '../components/navbar/MenuNav';
import Slider from '../components/slider/Slider';

const Home = () => {
  return (
    <div>
      <ContactNav/>
      <Navbar/>
      <MenuNav/>
      <Slider/>
    </div>
  
  )
}

export default Home;