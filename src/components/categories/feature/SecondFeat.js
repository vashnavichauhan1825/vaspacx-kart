import { SecfeatItem } from '../../../data';
import React from 'react';

const SecondFeat = () => {
  return (
    <div className="feature-first">
         {
             SecfeatItem.map((item)=>
                <div className="product-display pointer">
                <img alt="image" src={item.img}/>
                <small className="bold-grey-text">{item.title}</small>
                <small>{item.product}</small><br/>
                <small className="bold-white-txt">{item.price}</small>
            </div>  
             )
         }
        </div>
  )
}

export default SecondFeat;