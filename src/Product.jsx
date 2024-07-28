import "./Product.css";

function Product({title, price}) {
  // first change we will made at 
  if(price>30000){
    return (
    <div className="product">
      <h3>{title}</h3>
      <h5>Price is : {price}</h5>
      <p>Discount of 5%</p>
    </div>
  );
  }else{
    return(
      <div className="product">
        <h3>{title}</h3>
        <h5>Price is : {price}</h5>
      </div>
    );
  }
  
}

export default Product;