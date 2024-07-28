import "./Product.css";

function Product({title, price, features,features2}) {
  console.log(features);
  return (
    <div className="product">
      <h3>{title}</h3>
      <h5>Price is : {price}</h5>
      {/* print features arrays */}
      <p>{features}</p>
      <p>{features2.a}</p> 
    </div>
  );
}

export default Product;