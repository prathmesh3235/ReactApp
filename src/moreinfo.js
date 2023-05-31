import React,{useEffect} from 'react';
import ReactGA from 'react-ga';
import Nav from './Components/Nav';
import SecondHeader from './Components/SecondHeader';

const Moreinfo = () => {
   useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }
  ); 

  
  return (
    <div className='more-info'>
      <SecondHeader/>
     <h1>More Info On this Page </h1>
      
    </div>
  )
}

export default Moreinfo