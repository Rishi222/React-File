import "./Product.css";

function Product({title, price}) {
  // first change we will made at 
    return (
    <div className="product">
      <h3>{title}</h3>
      <h5>Price is : {price}</h5>
      {price > 30000 ? <p>Discount of 5%</p> : null}
    </div>
  );
}

export default Product;