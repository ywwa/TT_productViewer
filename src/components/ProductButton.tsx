import React from "react";
import { Link } from "react-router-dom";
import { componentStyles } from "../styles/Components";
import { Product } from "../types";

export const ProductButton = (props: { product: Product }) => {
  return (
    <Link to={`${props.product.id}`} state={props.product}>
      <div className={componentStyles.productButton.root}>
        <h3 className={componentStyles.productButton.heading}>
          {props.product.name}
        </h3>
        <div className={componentStyles.productButton.blockCategory}>
          <h5 className={componentStyles.productButton.textCategory}>
            {props.product.category}
          </h5>
          <h4>
            {props.product.price}{" "}
            <span className={componentStyles.productButton.spanCurrency}>
              {props.product.currency}
            </span>
          </h4>
        </div>
      </div>
    </Link>
  );
};
