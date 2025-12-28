import React from "react";
import Layout from "../components/Layout.jsx";
import Hero from "./Hero.jsx";
import ProductSlider from "./ProductSlider.jsx";

function Home() {
  return (
    <Layout>
      <Hero />
      <ProductSlider />
    </Layout>
  );
}

export default Home;
