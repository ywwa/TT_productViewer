import React from "react";
import { Link, useLocation } from "react-router-dom";
import { pageStyles, shared } from "../styles/Pages";
import { Product } from "../types";

const STYLE = {};

const PageProduct = () => {
  const location = useLocation();
  const selectedProduct: Product = location.state;
  return (
    <div className={shared.root}>
      <div className={pageStyles.products.blockHeading}>
        <h1 className={pageStyles.products.heading}>{selectedProduct.name}</h1>
      </div>
      <div className={pageStyles.products.rootDetails}>
        <div className={pageStyles.products.blockDetails}>
          <h2 className={pageStyles.products.textBlockDetails}>Price</h2>
          <p className={pageStyles.products.valueBlockDetails}>
            {selectedProduct.price}{" "}
            <span className={pageStyles.products.spanBlockDetails}>
              {selectedProduct.currency}
            </span>
          </p>
        </div>
        <div className={pageStyles.products.blockDetails}>
          <h2 className={pageStyles.products.textBlockDetails}>Category</h2>
          <p className={pageStyles.products.valueBlockDetails}>
            {selectedProduct.category}
          </p>
        </div>
        <div className={pageStyles.products.textBlockDetails + " text-xl"}>
          <h2 className={pageStyles.products.textBlockDetails}>Description:</h2>
          <p className={pageStyles.products.textDescription}>
            {selectedProduct.description}
          </p>
        </div>
      </div>
      <div className={pageStyles.products.btnWrap}>
        <Link to={"/"} className={pageStyles.products.btnLink}>
          Back to list
        </Link>
      </div>
    </div>
  );
};

export default PageProduct;
