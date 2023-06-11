import React from 'react'
import styled from 'styled-components';
import ReactGA from 'react-ga4';

const Videosection = ({product, userId}) => {
  const handelClick = () => {
    console.log("wertyui")
    ReactGA.event({
      action: userId,
      category:"clicked product " + product.id,
      value: parseInt(product.id)
     });
  }

  return (
    
    <div onClick={handelClick}  className='ytvideo'> 
          <iframe className='iFrame' width="auto" height="315" src={product.video} frameborder="0" allowfullscreen>
         </iframe>
    </div>
  )
}

export default Videosection