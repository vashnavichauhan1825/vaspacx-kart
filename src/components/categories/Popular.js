import React from 'react'
import { popularItem } from '../../data';

const Popular = () => {
  return (
      <>
       <h2 class="heading-product">Popular Categories</h2>
    <div className="popular-category">
       {
           popularItem.map((item)=>(
            <div className="pc-first">
            <div className="flex-center-product">
                <img src={item.img}/>
                {console.log(item.img)}
            </div>
            
                <ul>
                    <li>{item.title}</li>
                    <li className="bold-grey-text"><small>{item.listOne}</small></li>
                    <li className="bold-grey-text"><small>{item.listTwo}</small></li>
                    <li className="bold-grey-text"><small>{item.listThree}</small></li>
                    <li className="bold-grey-text"><small>{item.listFour}</small></li>
                    <li><small>Show All <i className="fa fa-angle-right" aria-hidden="true"></i></small></li>
                </ul>
            
        </div>
           ))
       }
    </div>
    </>
  )
}

export default Popular;
