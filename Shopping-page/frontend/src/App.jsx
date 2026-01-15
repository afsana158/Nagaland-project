import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout.jsx";
import Auth from "./components/Auth.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Search from "./pages/Search.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/auth"
          element={
            <Layout>
              <Auth />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Layout>
              <Wishlist />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />

        <Route
          path="/shop/:category"
          element={
            <Layout>
              <CategoryPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
