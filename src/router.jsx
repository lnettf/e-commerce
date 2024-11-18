import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Contact } from "./pages/Contact";
import { Products } from "./pages/Products/Products";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./pages/Cart/Cart";

const Layout = () => (
  <>
    <CartProvider>
      <Header />
      <Outlet />
    </CartProvider>
  </>
);

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: (
          <>
            <h1>404!!</h1>
          </>
        ),
      },
    ],
  },
]);
