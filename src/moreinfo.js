import React,{useEffect} from 'react';
import ReactGA from 'react-ga4';
import Nav from './Components/Nav';
import SecondHeader from './Components/SecondHeader';
import Footer from './Components/Footer';

const Moreinfo = ({userId}) => {
  // ReactGA.send({ hitType: "pageview", page: window.location.href, title: "MoreInfo Page" });
  const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get('product_id');

  
  return (
    <div className='more-info'>
      <SecondHeader/>
     <h1>More Info On this Page {product_id} </h1>
     <Footer/>
    </div>
  )
}

export default Moreinfo