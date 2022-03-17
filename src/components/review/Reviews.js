import { review } from '../../data'
import Five from './stars/Five'
import Four from './stars/Four'
import Three from './stars/Three'


const Reviews = () => {
  return (
     
    <>
      <h2 className="heading-product head-margin">Popular Reviews</h2>
      <div className="popular-category">
      {
          review.map((item)=>(
            <div className='review'>
                  <small className="bold-grey-text">{item.date}</small>
                  <p>{item.name}</p>

                  {item.id === 20 && <Five/>}
                  {item.id === 21 && <Four/>}
                  {item.id === 22 && <Three/>}
                  
                   <small className="bold-grey-text">{item.message}</small>
                   <small className="pointer">view more</small> 
             </div>
          ))
      }
       </div>
    </>
  )
}

export default Reviews;