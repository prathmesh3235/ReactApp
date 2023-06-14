import React, {useState, useEffect } from 'react'
import product_card from '../data/product_data'
import ReactGA from 'react-ga4';
import { doc, setDoc, arrayUnion } from "@firebase/firestore"
import { db } from "../services/firebase"

const ProductList = ({ref, userId})  => 
    {
    const listItems = product_card.map((item) =>
    <Cell userId={userId} shoe={item}  image={item.thumb}/>
    
    );
    return (
        

        <div id='productList' className='productlistHead' ref={ref}>
            <h4 className='productlistHeadh4'>   Wähle dein neues Lieblingsmodell  </h4>

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
        const ref = doc(db, "users", userId) // Firebase creates this automatically
        let data = {
            "Clicked Weitere Details": arrayUnion(shoe.product_name)
        }
        try {
            setDoc(ref, data, { merge: true })
        } catch(err) {
            console.log(err)
        }
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
                    <a onClick={handleClick} class="button is-primary" href={`/product?video=${showVideoPage}&product_id=${shoe.id}&userId=${userId}`}>
                        <strong>Weiter</strong>
                    </a>
                </div>
            </div>
    )
      
  }
  
  
  



export default ProductList;