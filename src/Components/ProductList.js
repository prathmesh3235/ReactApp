import React, {useState } from 'react'
import product_card from '../data/product_data'


const ProductList = ({ref})  => 
    {
        
    console.log(ProductList);
    const listItems = product_card.map((item) =>
    <Cell shoe={item}  image={item.thumb}/>
    
    );
    return (
        

        <div id='productList' className='productlistHead' ref={ref}>
            <h4>   Wähle dein neues Lieblingsmodell  </h4>

           <div className='productlist'>
           {listItems}
           </div>
        </div>
        
    )


}


function Cell({shoe, image}) {
    const [hover, setHover] = useState(false);
    return (
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src= {shoe.thumb} alt="Placeholder image"></img>
                    </figure>
                </div>
                <div class="card-content">
                    <p class="title-product-title">{shoe.product_name}</p>

                    <div class="content">
                        {shoe.price + "€"} 
                        <br></br>
                    </div>
                    <a class="button is-primary" href={"/product?product_id=" + shoe.id}>
                        <strong>Weitere Details</strong>
                    </a>
                </div>
            </div>
    )
      
  }
  
  
  



export default ProductList;