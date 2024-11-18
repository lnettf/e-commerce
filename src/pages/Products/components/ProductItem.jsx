import { Link } from "react-router-dom";
import { Container, Image, ProductInfo } from "./ProductItem.styles";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const ProductItem = ({ product }) => {
  const productUrl = `./${product.id}`;

  const { addProduct } = useContext(CartContext);

  const addToCart = () => {
    addProduct(product);
  };

  return (
    <Container>
      <Image src={product.image} alt="" width={100} />
      <ProductInfo>{product.title}</ProductInfo>
      <p>{product.price.toFixed(2)}€</p>
      <span>{product.rating.rate}</span>
      <Link to={productUrl}>Ver Producto</Link>
      <button onClick={addToCart}>Añadir al carrito</button>
    </Container>
  );
};
