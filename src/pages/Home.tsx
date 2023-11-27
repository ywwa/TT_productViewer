import React, { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { SearchInput } from "../components/SearchInput";
import { State } from "../components/State";
import { Product } from "../types";

const MOCK_DATA_URL =
  "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd";

const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(MOCK_DATA_URL);

        const data = await response.json();
        const products = data.products as Product[];

        setAllProducts(products);
        applySearchFilter(products, searchQuery);
      } catch (err: any) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    // very bad implementation tbh
    // just didnt like how it sets timeout on page load
    // it also instantly loads all products after clearing searchquery
    // i probl deserve to be shot for this
    let delay: any;
    if (searchQuery) {
      delay = setTimeout(() => {
        getProducts();
      }, 1000);
    } else {
      getProducts();
    }

    return () => {
      clearTimeout(delay);
    };
  }, [searchQuery]);

  const applySearchFilter = (products: Product[], query: string) => {
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  return (
    // noticed issue that after closing keyboard on ios
    // ui does not shift back to original but stays pulled up
    // skill issue probably
    <div
      className={
        "bg-neutral-800 text-neutral-200 " +
        "h-screen-safe flex items-center justify-center"
      }
    >
      <div
        className={
          "w-full h-screen-safe md:w-2/5 md:h-2/3 md:gap-5 " +
          "flex flex-col-reverse md:flex-col"
        }
      >
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div
          className={
            "flex flex-1 h-full w-full items-center justify-center " +
            "md:border-2 border-neutral-700 md:rounded-xl " +
            "overflow-scroll scrollbar-hide"
          }
        >
          {isLoading ? (
            <State title="Hold on" desc="Data is still loading..." />
          ) : error ? (
            <State title="Oops" desc="Something went wrong..." />
          ) : (
            // ios safari offest fix -> causes bugs other visual bugs
            // can live with that i guess?
            // dont have enough experience in safari related stuff so
            // could be just a mistake made by myself
            // "Focus first on business requirements, designs afterwards."
            // (https://github.com/ChiliLabs/test-tasks/blob/master/frontend_developer.md?plain=1#L27C92-L27C150)
            <div className={"w-full h-full py-5 md:py-0"}>
              <ProductList products={filteredProducts} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
