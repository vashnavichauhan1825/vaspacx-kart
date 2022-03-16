import React from 'react'
import { featureItem } from '../../../data';

const FirstFeat = () => {
  return (
    <div className="feature-first">
         {
             featureItem.map((item)=>
                <div className="product-display pointer">
                <img src={item.img}/>
                <small className="bold-grey-text">{item.title}</small>
                <small>{item.product}</small><br/>
                <small className="bold-white-txt">{item.price}</small>
            </div>  
             )
         }
        </div>
  )
}

export default FirstFeat;

