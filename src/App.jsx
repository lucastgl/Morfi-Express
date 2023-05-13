import React from 'react'
import './App.css'
import About from './Components/About'
import Steps from './Components/Steps'
import Testimonios from './Components/Testimonios'
import Form from './Components/Form'
import Footer from './Components/Footer'
import WhatsAppButton from './Components/WhatsAppButton'
import GaleriaViandas from './Components/GaleriaViandas'
import Team from './Components/Team'
import Header from './Components/Header'



function App() {

  return (
    <div>
      <WhatsAppButton/>
      <Header/>
      <GaleriaViandas/>
      <About/>
      <Steps/>
      <Team/>
      <Testimonios/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
