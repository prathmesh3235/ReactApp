import React from 'react'
import styled from 'styled-components';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Button } from '../styles/Button';
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga4';


const ProductDisplay = ({product, userId}) => {
  const handleClick = () => {
    console.log("clicked on more informatio")
    ReactGA.event({
      action: userId,
      category: "clicked on more information",
    })
  }
  return (
    <Wrapper>
      <h2 className="heading"> Features</h2>
      <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '50px', marginBottom:'50px'}}>
      {/* <img src="images/sunnyclubmaster.jpeg" alt="hero-section-photo" className="img-style"/> */}
      <div className='display-info'> 
       <ul className="product-info">
      <li className="product-info-i">  
       <h3> <AiOutlineArrowRight/>  {product.price} </h3>
      </li>
      <li className="product-info-i">
       <h3><AiOutlineArrowRight/> Color: Gold / Gray Green </h3>
      </li>
      <li className="product-info-i">
        
       <h3> <AiOutlineArrowRight/> Material: Metal </h3>
      </li>
      <li className="product-info-i">
        
       <h3><AiOutlineArrowRight/> Delivery in 2-4 working days </h3>
      </li>
      <li className="product-info-i">
        
       <h3><AiOutlineArrowRight/> Extra Feature One </h3>
      </li>
      <li className="product-info-i">
        
       <h3><AiOutlineArrowRight/> Extra Feature Two </h3>
      </li>
      <li className="product-info-i">  
       <h3>  <a onClick={handleClick} href={'/product/moreinfo?product_id=' + product.id}><Button>More Information </Button></a> </h3>
      </li>
      
    </ul>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`


position: relative;
padding:20px;
margin-top:40px;
margin-right:100px;
  .productDisplay: {
    display: 'flex',
    flexDirection: 'row';
    
  }
.display-info: {

}

.heading{
  font-family: fantasy;

  margin-top: 30px;
  text-align: center;
  text-bold: bold;
  margin-left:50px;
  
  text-decoration-color: Blue;
  text-decoration-thickness: 5px
}
.product-info-i{
  font: 1.2em "Fira Sans", sans-serif;
  margin-top:10px;
}

.product-info: {
  alignItems: 'center',
  margin-top:30px;
}
.img-style{
  margin-top: 10px;
  width: 40%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: left;
}

`;

export default ProductDisplay