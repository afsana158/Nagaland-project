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
      <ProductSlider />
      <TimelessCollectibles />
      <Chatbot />
    </Layout>
  );
}

export default Home;
