import React, { useState } from 'react'
import './App.css'
import OpeningContainer from './Components/OpeningContainer'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Steps from './Components/Steps'
import Team from './Components/Team'
import Testimonials from './Components/Testimonials'
import Form from './Components/Form'
import Footer from './Components/Footer'


function App() {

  return (
    <div>
      <OpeningContainer/>
      <Gallery/>
      <About/>
      <Steps/>
      <Team/>
      <Testimonials/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
