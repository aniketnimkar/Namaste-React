/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */
// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./components/contants";
//react-element
//JSX => React.createElement =>object => HTML(DOM)

//React Components(have 2 types)
// Functional component(NEW)******
// CLass based component(OLD)

//Config Driven UI
//data

//Optional Chining=?

// console.log(restaurantList);

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root

//async defer
root.render(<AppLayout />);
