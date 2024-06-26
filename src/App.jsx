import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AppLayout from "./AppLayout";
import Error from "./ui/Error";
import { loader as menuLoader } from "./pages/Menu";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Locations from "./pages/Locations";
import CartOpen from "./pages/CartOpen";
import CreateOrder, { action as createOrderAction } from "./pages/CreateOrder";
// import {action as updateOrderAction} from "./pages/"
import Order, { loader as orderLoader } from "./ui/Order";

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
        loader: menuLoader,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
      {
        path: "/cart/open",
        element: <CartOpen />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
