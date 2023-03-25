// imported react and reactdom from nodemodule folder
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import Cart from "./components/Cart";
import React from "react";
import { IMG_CDN_URL } from "./components/contants";

//according to router all the children go into Outlet.
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        // errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        // errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        // errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root

//async defer
root.render(<RouterProvider router={appRouter} />);
