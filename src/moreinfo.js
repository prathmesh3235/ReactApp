import React,{useEffect} from 'react';
import ReactGA from 'react-ga4';
import Nav from './Components/Nav';
import SecondHeader from './Components/SecondHeader';
import Footer from './Components/Footer';

const Moreinfo = ({userId}) => {
  const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get('product_id');

  ReactGA.event({
    category: userId,
    action:"MoreInfo CLicked product " + product_id,
    value: parseInt(product_id)
   });
    

  
  return (
    <div className='more-info'>
      <SecondHeader/>
     <h1>More Info On this Page </h1>
     
      
    </div>
  )
}

export default Moreinfo