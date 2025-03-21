import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Info from "./pages/information/Info";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <>
      <div className="w-full">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home/> } path="/"/>
            <Route element={<About/> } path="/894-637.783"/>
            <Route element={<Services/> } path="/8494-383.90"/>
          </Routes>
          <Info />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
