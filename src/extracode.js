<div> 
    <h1> product: {product.id} </h1>
  <Products onClickMoreInfo={handleClick} />
    </div>


{
<div onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=> {setHover(false)}} className="cell">
        <img src={image} className="img-prod" />
        {/* <h3>{shoe.description}</h3> */}
        <p className="prod-name">  {shoe.product_name}</p>
        <p className="price">Price: {shoe.price}</p>
        <a href={`/product?product_id=${shoe.id}`}><button style={{display: !hover ? "flex" : "ruby"}} className="prod-btn">More Info</button></a>
      </div>
}