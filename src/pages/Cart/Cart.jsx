import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const groupById = (cart) => {
  return Object.groupBy(cart, ({ id }) => id);
};

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const products = groupById(cart);

  return (
    <>
      <h1>soy el carrito</h1>
      {Object.values(products).map((products) => {
        const product = products[0];
        return (
          <>
            <p>{product.title}</p>
            <img src={product.image} width={32} height={32} />
            <p>cantidad: {products.length}</p>
          </>
        );
      })}
    </>
  );
};
