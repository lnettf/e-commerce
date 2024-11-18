import { ProductItem } from "./ProductItem";
import { Container } from "./ProductList.styles";

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => {
        return <ProductItem product={product} />;
      })}
    </Container>
  );
};
