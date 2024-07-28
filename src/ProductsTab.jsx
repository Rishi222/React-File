import Product from "./Product.jsx";

function ProductsTab(){
    return (<>
    {/* react props */}
      <Product title="Mobile" price={20000}/>
      <Product title="Laptop" price={100000}/>
      <Product title="TV" price={30000}/>
    </>);
}

export default ProductsTab;