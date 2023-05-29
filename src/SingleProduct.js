import styled from "styled-components";
import React from 'react'
import data from './data/product_data'
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import Virtualtryon from "./Components/Virtualtryon";
import Productpage from "./Components/Productpage";
import ProductDisplay from "./Components/ProductDisplay";
// import { useHistory } from "react-router-dom";

const SingleProduct = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get('product_id')
  const product = data.filter(product => product.id == product_id)[0];
  console.log(product)
  const navigate = useNavigate();

  // const history = useHistory();

  function handleClick() {
    navigate("/product/moreinfo?product_id=" + product.id);
  }
  return(
    <div className="abc">
      <Virtualtryon product={product} />
      <div className="single-product-page">
      {/* <div className="product-image">
        <img src={product.thumb} alt={product.product_name} />
      </div>
      <div className="product-details">
        <h2>{product.product_name}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart" onClick={handleClick}>More Info</button>
      </div> */}
     <div className="slider-block"> <Productpage product={product} /></div>
      <div className="prod-disp">
        <ProductDisplay product={product} /> 
      </div>
      </div>
      
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

