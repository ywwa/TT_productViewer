import React, { useEffect, useRef } from "react";
import { Product } from "../types";
import { ProductButton } from "./ProductButton";

export const ProductList = (props: { products: Product[] }) => {
  // on mobile set scroll to the very bottom cause
  // my stupid design decision 🤓
  // (i put stuff at bottom of screen cause its in thumb reach range)
  // (very human and ergonomic design!)
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [props.products]);
  return (
    <ul
      className={
        "h-full w-full flex flex-1 flex-col-reverse md:flex-col " +
        "overflow-scroll scrollbar-hide"
      }
    >
      {props.products.map((product) => {
        return <ProductButton key={product.id} product={product} />;
      })}
    </ul>
  );
};
