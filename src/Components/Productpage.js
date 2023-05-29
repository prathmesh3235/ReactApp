import React from 'react';
import Slider from './Slider';

const Productpage = ( {product}) => {

  return (
    <div className="product-page">
      <h1> {product.product_name} </h1>
      <Slider product={product} />
    </div>
  );
};

export default Productpage;
