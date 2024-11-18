import { Link } from "react-router-dom";
import { Cart, Container, List } from "./Header.styles";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </List>
      <Cart>
        <Link to="/cart">
          {cart.length}
          <img
            src={"https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"}
            width={16}
            height={16}
            alt=""
          />
        </Link>
      </Cart>
    </Container>
  );
};
