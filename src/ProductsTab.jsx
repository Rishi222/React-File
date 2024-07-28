import Product from "./Product.jsx";

function ProductsTab(){
  // make some
    let options=["hi-tech","durable","fast"];
    let options2={a:"hi-tech",b:"durable",c:"fast"};

    return (<>
    {/* react props */}
      <Product 
      title="Mobile" 
      price={20000} 
      features={options} 
      features2={options2}/>

      {/* <Product title="Laptop" price={100000}/>

      <Product title="TV" price={30000}/> */}
    </>);
}

export default ProductsTab;