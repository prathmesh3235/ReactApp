import React, {useState, useEffect } from 'react'
import product_card from '../data/product_data'
import ReactGA from 'react-ga4';


const ProductList = ({ref, userId})  => 
    {
    const listItems = product_card.map((item) =>
    <Cell userId={userId} shoe={item}  image={item.thumb}/>
    
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


function Cell({ shoe, image, userId}) {
    const [hover, setHover] = useState(false);
    const [showVideoPage, setShowVideoPage] = useState(false)
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        console.log("vgarigvrs", searchParams.has("video"))
        setShowVideoPage(searchParams.get("video") == "true")
      }, [])
    const handleClick = () => {
        console.log("shownlnwe", showVideoPage)
        ReactGA.event({
            category: "clicked Weitere Details for " + shoe.product_name,
            action: userId,
           });
    }
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
                    <a onClick={handleClick} class="button is-primary" href={!showVideoPage ? "/product?product_id=" + shoe.id : "/product?video=true&product_id=" + shoe.id}>
                        <strong>Weitere Details</strong>
                    </a>
                </div>
            </div>
    )
      
  }
  
  
  



export default ProductList;