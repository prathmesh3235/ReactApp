import React,{useEffect} from 'react';
import ReactGA from 'react-ga4';
import Nav from './Components/Nav';
import SecondHeader from './Components/SecondHeader';
import Footer from './Components/Footer';
import styled from 'styled-components';

const Moreinfo = ({userId}) => {
  // ReactGA.send({ hitType: "pageview", page: window.location.href, title: "MoreInfo Page" });
  const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get('product_id');

  
  return (
    <Wrapper>
      <SecondHeader/>
     <h1>More Info On this Page {product_id} </h1>
     <Footer/>
     </Wrapper>
  )
}
const Wrapper = styled.section`
`; 

export default Moreinfo