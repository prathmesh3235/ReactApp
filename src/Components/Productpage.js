import React,{useEffect} from 'react';
import Slider from './Slider';
import ReactGA from 'react-ga';

const Productpage = ( {product}) => 
{
  useEffect(()=>{ 
    const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get('product_id')
    ReactGA.event({
    category: "user",
    action:"clicked product",
    value: product_id
   });
  })

  return (
    <div className="product-page">
      <h1> {product.product_name} </h1>
      <Slider product={product} />
    </div>
  );
};

export default Productpage;
