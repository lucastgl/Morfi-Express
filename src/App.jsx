import React from 'react'
import './App.css'
import OpeningContainer from './Components/OpeningContainer'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Steps from './Components/Steps'
import Team from './Components/Team'
import Testimonials from './Components/Testimonials'
import Form from './Components/Form'
import Footer from './Components/Footer'
import WaterMark from './Components/WaterMark'


function App() {

  return (
    <div>
      <OpeningContainer/>
      <About/>
      <Steps/>
      <Form/>
      <Footer/> 
      <WaterMark/>
      {/* 
      <Gallery/>
      <Team/>
      <Testimonials/>
      */}
    </div>
  )
}

export default App
