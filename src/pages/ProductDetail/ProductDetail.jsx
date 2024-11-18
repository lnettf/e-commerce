import { useParams } from "react-router-dom";
import { useProduct } from "./hooks/useProduct";
import {
  AddToCart,
  Category,
  Container,
  Image,
  Info,
  Price,
} from "./ProductDetail.styles";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductDetail = () => {
  let { id } = useParams();
  const { product, error, isLoading } = useProduct(id);

  const { addProduct } = useContext(CartContext);

  const addToCart = () => {
    addProduct(product);
  };

  if (isLoading) {
    return <h1>Cargando....</h1>;
  }

  if (error) {
    return <h1>Error....</h1>;
  }

  return (
    <Container>
      <Image src={product.image} alt="" />
      <Info>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <Category>#{product.category}</Category>
        <Price>{product.price.toFixed(2)}€</Price>
        <AddToCart onClick={addToCart}>Añadir al carrito</AddToCart>
      </Info>
    </Container>
  );
};
