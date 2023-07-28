import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout/AppLayout";
import Error from "./ui/Error/Error";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Faq from "./features/faq/Faq";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import Home from "./ui/Home/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
