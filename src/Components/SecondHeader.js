import React from 'react';
import styled from'styled-components';
import { NavLink } from'react-router-dom';
import Nav from './Nav';
import IMG from "../assets/Logo_SOLACE.png"
import {BsCartCheckFill} from 'react-icons/bs';
import ReactGA from 'react-ga4';


const SecondHeader = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const userId = searchParams.get("userId")
   return (
      <MainHeader2 id='header'>

          <div className='logo-img'> 
          <img src={IMG} width="120px" height="100px" alt="my logo img" />  
          </div>  
        <div> 
        <NavLink onClick={() => {
          console.log("Click", userId)
          ReactGA.event({
            action: userId,
            category:"clicked Cart", 
           });  
        }
      }
          to="/thankyou"
          className="navbar-link-cart">
          <BsCartCheckFill size={55}/>
        </NavLink>

        </div>
   
     </MainHeader2>
    );
  };
  
  const MainHeader2 = styled.header`
    background-color: #FCE698;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

  `;
  export default SecondHeader;