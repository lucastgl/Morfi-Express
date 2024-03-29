import React from 'react'
import {AboutContainer, Gradient, ThirdtTitle, Parrafo} from '../Styles/AboutComponents'

const About = () => {
  return (
    <AboutContainer id='about'>
      <Gradient>
        <ThirdtTitle>¿Quiénes Somos?</ThirdtTitle>
        <Parrafo>
          Somos una marca de comida saludable que te brinda practicidad y tiempo 
          a la hora de comer, nuestro objetivo es brindarte una alternativa sana 
          en tu rutina diaria.
        </Parrafo>
        <Parrafo>
          Nuestras viandas son aptas para todo público; personas con poco tiempo 
          para cocinar y que a la vez desean cuidar su alimentación ó atletas de 
          alto rendimiento. Brindamos la opción de personalizar tus viandas de 
          acuerdo a tu objetivo.
        </Parrafo>
      </Gradient>
    </AboutContainer>
  )
}

export default About