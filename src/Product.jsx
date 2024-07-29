import "./Product.css";
import Price from "./Price";
import Description from "./Description";

function Product({title,idx}) { 

    // maintain the data in the form of arrays.
    let description = [
      "8000DPI",
      "Intutive Touch Surface",
      "Designed for iPad Pro",
      "Wireless Mouse 2.4 GHz",
    ];
    let description2 = [
      "5 Programmable Buttons",
      "Designed for iPad Pro",
      "Intutive Touch Surface",
      "Optical Orientation"
    ];
    let oldprice=["12,495","11,900","1,599","599"];
    let newprice=["8,999","9,199","899","278"];
    return (
      <div className="product">
        <h3>{title}</h3>
        <Description description={description[idx]} description2={description2[idx]}/>
        <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
      </div>
    );
}

export default Product;