import React, { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { SearchInput } from "../components/SearchInput";
import { State } from "../components/State";
import { pageStyles, shared } from "../styles/Pages";
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
    // for some reason on android safe-area isnt working
    <div className={shared.root + " " + pageStyles.home.root}>
      {isLoading ? (
        <State title="Please wait" desc="Data is still loading..." />
      ) : error ? (
        <State title="Oops..." desc="Something went wrong..." />
      ) : (
        <ProductList products={filteredProducts} />
      )}
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default Home;
