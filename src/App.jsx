import { useState, Suspense } from "react";
import RootPage from "./pages/RootPage";
import CartPage from "./pages/CartPage";
import MealsPage, { loader as RootLoader } from "./pages/MealsPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const displayCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage showCart={displayCartHandler} />,

      children: [
        {
          path: "cart",
          element: (
            <CartPage
              cartIsShown={cartIsShown}
              hideCartHandler={hideCartHandler}
            />
          ),
        },
        { path: ":meals", element: <MealsPage />, loader: RootLoader },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
