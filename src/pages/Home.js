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
import Newsletter from '../components/categories/Newsletter';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Slider/>
      < Service />
      <Feature/>
      <Popular/>
      <ImgLayout/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
    
    </div>
  
  )
}

export default Home;

