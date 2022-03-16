import React from 'react'
import { popularItem } from '../../data';

const Popular = () => {
  return (
      <>
      
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

{/* <div class="popular-category">
<div class="pc-first">
    <div class="flex-center-product">
        <img src="./img/book.png">
    </div>
    
        <ul>
            <li>Books</li>
            <li class="bold-grey-text"><small>children's Books</small></li>
            <li class="bold-grey-text"><small>children's Books</small></li>
            <li class="bold-grey-text"><small>children's Books</small></li>
            <li class="bold-grey-text"><small>children's Books</small></li>
            <li><small>Show All <i class="fa fa-angle-right" aria-hidden="true"></i></small></li>
        </ul>
    
</div>
<div class="pc-first">
   <div class="flex-center-product">
       <img src="./img/lens.png">
   </div>
  
   <ul>
       <li>Books</li>
       <li class="bold-grey-text"><small>children's Books</small></li>
       <li class="bold-grey-text"><small>children's Books</small></li>
       <li class="bold-grey-text"><small>children's Books</small></li>
       <li class="bold-grey-text"><small>children's Books</small></li>
       <li><small>Show All <i class="fa fa-angle-right" aria-hidden="true"></i></small></li>
   </ul>
   
</div>
<div class="pc-first">
   <div class="flex-center-product">
       <img src="./img/game.png">
   </div>
   
   <ul>
       <li>Books</li>
       <li class="bold-grey-text"><small>children's Books</small></li>
       <li class="bold-grey-text"><small>children's Books</small></li>
       <li class="bold-grey-text"><small>children's Books</small></li>
       <li class="bold-grey-text"><small>children's Books</small></li>
       <li><small>Show All <i class="fa fa-angle-right" aria-hidden="true"></i></small></li>
   </ul>
   
</div>
</div> */}