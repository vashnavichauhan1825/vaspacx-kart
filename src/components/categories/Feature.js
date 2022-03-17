import React from 'react'
import Countdown from './feature/Countdown';
import FirstFeat from './feature/FirstFeat';
import SecondFeat from './feature/SecondFeat';

const Feature = () => {
  return (
      <>
    <h2 class="heading-product">Featured Products</h2>
      <div className='feature-cont'>
    <FirstFeat/>
    <Countdown/>
    <SecondFeat/>
    </div>
    </>
  )
}

export default Feature;
