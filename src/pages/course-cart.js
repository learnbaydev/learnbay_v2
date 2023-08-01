import React from "react";
import Header from "../../components/Cart/Header/Header";
import dynamic from "next/dynamic";
import Head from "next/head";
const ProductList = dynamic(() =>
  import("../../components/Cart/Product/ProductList")
);

const courseCart = () => {
  return (
    <div>
      <Head>
        <title>cart-Learnbay</title>
      </Head>
      <Header />
      <ProductList dataScience={true} radio={true} />
    </div>
  );
};

export default courseCart;
