import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout.jsx";

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
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/gifting" element={<Gifting />} /> */}
      </Routes>
    </>
  );
}

export default App;
