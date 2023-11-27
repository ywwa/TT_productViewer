import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";

export const ProductButton = (props: { product: Product }) => {
  return (
    <Link to={`${props.product.id}`} state={props.product}>
      <li
        className={
          "p-3 border-t border-neutral-700 grid grid-cols-2 grid-rows-2 " +
          "hover:bg-neutral-700"
        }
      >
        <h2 className={"font-semibold text-md"}>{props.product.name}</h2>
        <h4 className={"flex justify-end items-center row-span-2 font-medium"}>
          {props.product.price}
          <span className={"text-neutral-400 italic"}>
            {props.product.currency}
          </span>
        </h4>
        <h3 className={"italic text-neutral-400"}>{props.product.category}</h3>
      </li>
    </Link>
  );
};
