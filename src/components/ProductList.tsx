import React, { useEffect, useRef } from "react";
import { componentStyles } from "../styles/Components";
import { Product } from "../types";
import { ProductButton } from "./ProductButton";

export const ProductList = (props: { products: Product[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [props.products]);
  return (
    // this should be list i guess
    <div className={componentStyles.productList} ref={containerRef}>
      {props.products
        .slice()
        .reverse()
        .map((product) => {
          return <ProductButton key={product.id} product={product} />;
        })}
    </div>
  );
};
