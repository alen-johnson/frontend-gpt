import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatisGPT3,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatisGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
