import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="page-container">{/* All page content goes here */}</main>
    </>
  );
}

export default App;
