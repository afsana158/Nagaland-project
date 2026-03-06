import React from "react";
import Layout from "../components/Layout.jsx";
import Hero from "./Hero.jsx";
import ProductSlider from "./ProductSlider.jsx";
import Chatbot from "../components/Chatbot.jsx";
import TimelessCollectibles from "./Collections.jsx";

function Home() {
  return (
    <Layout>
      <Hero />
      <div id="products">
        <ProductSlider />
      </div>
      <TimelessCollectibles />
      <Chatbot />
    </Layout>
  );
}

export default Home;
