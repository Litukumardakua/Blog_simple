import React from "react";
import Header from "./Common/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Footer from "./Common/Footer";
import Contact from './Component/Contact'
import Home from "./Component/Dashboard/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
        <Footer />
    </>
  );
}

export default App;
