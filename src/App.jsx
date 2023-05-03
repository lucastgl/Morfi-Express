import React from 'react'
import './App.css'
import OpeningContainer from './Components/OpeningContainer'
import FodySlider from './Components/FodySlider'
import About from './Components/About'
import Steps from './Components/Steps'
import TeamContainer from './Components/Team/TeamContainer'
import Testimonials from './Components/Testimonials'
import Form from './Components/Form'
import Footer from './Components/Footer'
import WaterMark from './Components/WaterMark'


function App() {

  return (
    <div>
      <OpeningContainer/>
      <FodySlider/>
      <About/>
      <Steps/>
      <TeamContainer/>
      <Testimonials/>
      <Form/>
      <Footer/> 
      <WaterMark/>
    </div>
  )
}

export default App
