import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import SliderPart from './components/slide/Slider'
import Services from './pages/services/Services'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'

import Contact from './pages/contact/Contract'
import Info from './pages/information/Info'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar/>
      <SliderPart/>
      <Services/>
      <About/>
      <Blog/>
      <Contact/>
      <Info/>
      <Footer/>
    </>
  )
}
