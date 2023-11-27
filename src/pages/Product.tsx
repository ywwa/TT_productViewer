import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Product } from "../types";

const PageProduct = () => {
  const location = useLocation();
  const selectedProduct: Product = location.state;
  return (
    <div
      className={
        "bg-neutral-800 text-neutral-200 " +
        "h-screen-safe flex items-center justify-center"
      }
    >
      <div
        className={
          "w-full h-screen-safe md:w-2/5 md:h-2/3 " +
          "flex flex-col " +
          "md:border-2 border-neutral-700 md:rounded-xl overflow-hidden"
        }
      >
        <div className={"bg-neutral-900 p-5 text-2xl font-semibold mb-3"}>
          <h1>{selectedProduct.name}</h1>
        </div>
        <div className={"flex flex-1 flex-col p-3 text-neutral-400"}>
          <div className={"flex justify-between mb-3"}>
            <h2 className={"text-xl"}>Price:</h2>
            <p className={"text-md font-bold text-white"}>
              {selectedProduct.price}
              <span className={"font-normal italic"}>
                {selectedProduct.currency}
              </span>
            </p>
          </div>
          <div className={"flex justify-between mb-3"}>
            <h2 className={"text-xl"}>Category:</h2>
            <p className={"text-md font-bold text-white"}>
              {selectedProduct.category}
            </p>
          </div>
          <div className={""}>
            <h2 className={"text-xl"}>Description</h2>
            <p className={"p-3 text-justify text-md text-neutral-300"}>
              {selectedProduct.description}
            </p>
          </div>
        </div>
        <div className={"bg-neutral-900 p-5 text-xl font-medium"}>
          <Link
            to={"/"}
            className={"py-2 px-4 border-2 rounded-xl border-neutral-700 " + 
              "hover:bg-neutral-600"}
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageProduct;
