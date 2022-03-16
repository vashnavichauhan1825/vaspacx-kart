// import imgSlide from '../../img/telescope.jpg'
// const Slider = () => {
//   return (
//     <section className="top-section">
      
     
//     <div className="space-banner">
//     <button className="float-btn add-float left-btn"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
//       <div className="slider-detail">
//         <img src={imgSlide}/>
//        <h1>We see past time in a telescope !</h1>
//        <small>It won't be a bigger problem to find one space lover in your neighbor</small>
//        <a href="https://vaspacx-catalog-page.netlify.app/catelog.html"><button className="primay-btn label-btn">BUY NOW</button></a>
//        </div>
//        <button className="float-btn add-float right-btn"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
//     </div>
  
// </section>
// //   )
// // }
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex:1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  z-index:3;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color:white;
  border:2px solid blue;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
      <button className="float-btn add-float left-btn"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>  
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
     <Arrow direction="right">
      <button onClick={() => handleClick("right")} className="float-btn add-float left-btn"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>  
      </Arrow>
    </Container>
  );
};

export default Slider;