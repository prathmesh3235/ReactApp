import React from 'react'
import { Button } from '../styles/Button'
import styled from 'styled-components'
import { BsEmojiSunglasses, BsCameraFill } from "react-icons/bs";



const Virtualtryon = ({product}) => {

  return (
    <Wrapper>
     
    <div className="virtual-container">
        <h2 className="virtual-text"> <BsEmojiSunglasses /> Try {product.product_name} Virtually</h2>
        <div className="vertical-center">
        <a href='https://seashell-app-4lcie.ondigitalocean.app/' target='blank'>
          <Button> <BsCameraFill /> Try On Virtually</Button></a>
          </div>
    </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`



`;
export default Virtualtryon;