import styled from "styled-components";
import React, {useState, useEffect} from 'react'
import data from './data/product_data'
import ReactGA from 'react-ga4';
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import Virtualtryon from "./Components/Virtualtryon";
import Productpage from "./Components/Productpage";
import ProductDisplay from "./Components/ProductDisplay";
import Footer from "./Components/Footer";
// import { useHistory } from "react-router-dom";

const SingleProduct = ({userId}) => {
  ReactGA.send({ hitType: "pageview", page: window.location.href, title: "Singel Product Page" });
  const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get('product_id')
  const product = data.filter(product => product.id == product_id)[0];
  const [showVideoPage, setShowVideoPage] = useState(false)
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        console.log("vgarigvrs", searchParams.has("video"))
        setShowVideoPage(searchParams.get("video") == "true")
      }, [])

  return(
    <div className="abc">
     {showVideoPage ? <h1> Videoooo</h1> :  <Virtualtryon product={product} />}
      <div className="single-product-page">
      {/* <iframe src="https://seashell-app-4lcie.ondigitalocean.app/" title="Iframe" style={{width: "683px", height: "683px"}}></iframe> */}
      {/* <div className="product-image">
        <img src={product.thumb} alt={product.product_name} />
      </div>
      <div className="product-details">
        <h2>{product.product_name}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart" onClick={handleClick}>More Info</button>
      </div> */}
     <div className="slider-block"> <Productpage userId={userId} product={product} /></div>
      <div className="prod-disp">
        <ProductDisplay ReactGA={ReactGA} userId={userId} product={product} /> 
      </div>
      </div>
    <Footer/>
    </div>
    
  )   
};


  

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct; 

