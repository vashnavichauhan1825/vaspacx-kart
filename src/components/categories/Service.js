import React from 'react'
import { serviceItems } from '../../data'
import styled from 'styled-components'

const ServiceContainer = styled.div`
display:flex;
justify-content:space-around;
margin-top:-60px;
`
const Service = () => {
   
  return (
    <ServiceContainer>
        {
             serviceItems.map((item)=>(
                <div className="service-conatiner">
                <div>
                    <i className={item.icon} aria-hidden="true"></i>
                     <h3>{item.title}</h3>
                    <small className="bold-grey-text">{item.info}</small >
                </div>
            </div>
            ))

          
            
            
    }       
    </ServiceContainer>
  )
}

export default Service;