import React from "react";
import Header from "../../components/Cart/Header/Header";
import dynamic from "next/dynamic";
const ProductList = dynamic(() =>
  import("../../components/Cart/Product/ProductList")
);

const courseCart = () => {
  return (
    <div>
      <Header />
      <ProductList dataScience={true} radio={true} />
    </div>
  );
};

export default courseCart;
