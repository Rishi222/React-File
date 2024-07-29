import Product from "./Product.jsx";

function ProductsTab(){
  let styles = {
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignItems:'center',
  }; 
    return (
      <div style={styles}>
        {/* react props */}
        <Product
          title="Logitech MX Master"
          idx={0}
        />
        <Product
          title="Apple pencil (2nd Gen)"
          idx={1}
        />
        <Product
          title="Zebronics"
          idx={2}
        />
        <Product
          title="Petronics Toad"
          idx={3}
        />
      </div>
    );
}

export default ProductsTab;