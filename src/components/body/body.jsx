import React from "react";
import Menu from "./menu";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
