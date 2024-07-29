import "./Product.css";

function Product({title, price}) {
    let styles={ backgroundColor : price >30000 ? "pink":""}  
    return (
      <div className="product" style={styles}>
        <h3>{title}</h3>
        <h5>Price is : {price}</h5>
        {price > 30000 ? <p>Discount of 5%</p> : null}
      </div>
    );
}

export default Product;