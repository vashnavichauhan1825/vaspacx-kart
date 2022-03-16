import React from 'react'
import Navbar from '../components/navbar/Navbar';
import '../components/landingPage.css'
import ContactNav from '../components/navbar/ContactNav';
import MenuNav from '../components/navbar/MenuNav';
import Slider from '../components/slider/Slider';
import Service from '../components/categories/Service'
import Feature from '../components/categories/Feature';

const Home = () => {
  return (
    <div>
      <ContactNav/>
      <Navbar/>
      <MenuNav/>
      <Slider/>
      < Service />
      <h2 class="heading-product">Featured Products</h2>
      <Feature/>
    </div>
  
  )
}

export default Home;