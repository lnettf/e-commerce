import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setIsLoading(false);
    };
    get();
  }, []);

  return { isLoading, products };
};
