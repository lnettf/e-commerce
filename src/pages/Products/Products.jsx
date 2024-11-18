import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { useProducts } from "./hooks/useProducts";

export const Products = () => {
  const { isLoading, products } = useProducts();
  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
