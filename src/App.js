import React, {useRef,useEffect} from "react";
import ReactGA from 'react-ga';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import Moreinfo from "./moreinfo";

const TRACKING_ID = "UA-270337658-3";  
ReactGA.initialize(TRACKING_ID);


const App = () => {

  useEffect(() => { 
    console.log("Pageview");
    
    ReactGA.pageview(window.location.pathname);
    console.log("Pageviewwand");
  }
  );
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
   
  };
    return(
    <ThemeProvider theme={theme}> 
    <Router>
      <GlobalStyle />
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home ref={ref} />} />

        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />   
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<SingleProduct/>} />
        <Route path="/product/moreinfo" element={<Moreinfo/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
       </Router>
       </ThemeProvider>
  )
};

export default App;
