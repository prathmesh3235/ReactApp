import React,{useRef, useEffect} from 'react';
import styled from 'styled-components';
import HeroSection from './Components/LandingPage';
import ProductDisplay from './Components/ProductDisplay';
import Virtualtryon from './Components/Virtualtryon';
import ProductList from './Components/ProductList';
import App from './App';
import Header from './Components/Header';
import ReactGA from 'react-ga4';
import Footer from './Components/Footer';
const Home=({ref, userId})=>{
 ReactGA.send({ hitType: "pageview", page: "/home", title: "HomePage" });
    const data = 
            {
        name: "Sunny",
        description: "This is a description for the home page",
            };
    return <>
    <Header />
    <HeroSection userId={userId} myData = {data} />
    <div className="pcontainer">
    <ProductList userId={userId} ref={ref} />
    
    </div>
    
    
    </>;
};



export default Home;