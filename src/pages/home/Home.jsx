import React from 'react'
import SliderPart from '../../components/slide/Slider'
import Services from '../services/Services'
import About from '../about/About'
import Blog from '../blog/Blog'
import Contact from '../contact/Contract'

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="w-full">
            <SliderPart/>
        </div>
        <div className="w-full">
            <Services/>
        </div>
        <div className="w-full">
            <About/>
        </div>
        <div className="w-full">
            <Blog/>
        </div>
        <div className="w-full">
            <Contact/>
        </div>
      </div>
    </>
  )
}
