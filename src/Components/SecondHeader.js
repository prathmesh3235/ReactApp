import React from 'react';
import styled from'styled-components';
import { NavLink } from'react-router-dom';
import Nav from './Nav';


const SecondHeader = () => {
   return (
      <MainHeader2>

          <div className='logo-img'> 
          <img src="./images/Logo_SOLACE.png"  width="120px" height="100px" alt="my logo img" />  
          </div>  
   
     </MainHeader2>
    );
  };
  
  const MainHeader2 = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: #FCE698;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: auto;
    



  `;
  export default SecondHeader;