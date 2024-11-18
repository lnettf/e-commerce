import axios from "axios";
import { useEffect, useState } from "react";

const BASE_API = "https://fakestoreapi.com/products/";

const getProductDetail = async (id) => {
  try {
    const result = await axios.get(`${BASE_API}/${id}`);
    return {
      data: result.data,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const { data, error } = await getProductDetail(id);
      if (data) {
        setProduct(data);
      } else if (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    get();
  }, []);

  return {
    product,
    error,
    isLoading,
  };
};
