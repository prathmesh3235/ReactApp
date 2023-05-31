import React,{useRef, useEffect} from 'react';
import styled from 'styled-components';
import HeroSection from './Components/HeroSection';
import ProductDisplay from './Components/ProductDisplay';
import Virtualtryon from './Components/Virtualtryon';
import ProductList from './Components/ProductList';
import App from './App';
import Header from './Components/Header';
import ReactGA from 'react-ga';
const Home=({ref})=>{

    useEffect(()=>{ ReactGA.pageview(window.location.pathname)
         })
    const data = 
            {
        name: "Sunny",
        description: "This is a description for the home page",
            };
    return <>
    <Header />
    <HeroSection myData = {data} />
    <div className="pcontainer">
    <ProductList ref={ref} />
    </div>
    
    
    </>;
};



export default Home;