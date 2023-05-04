import React from 'react'
import {Link} from "react-scroll"
import {StepsContainer, FourthTitle, StepsDetail, Step, Parrafo, ContactButton, PicContainer} from '../Styles/StepsComponents'
import step1 from "../imgs/Steps/IconoFormulario.png"
import step2 from "../imgs/Steps/IconoPreparacion.png"
import step3 from "../imgs/Steps/IconoVianda.png"
import step4 from "../imgs/Steps/IconoObjetivo.png"
import linea from "../imgs/Steps/Line.png"

const Steps = () => {
  return (
    <StepsContainer>

      <FourthTitle><img src={linea}/>Tus <span style={{color: "#6CBD45", fontWeight: 600}}>comidas</span> en solo cuatro pasos<img src={linea}/></FourthTitle>
      
      <Step>

        <StepsDetail>
          <PicContainer stepNumber={step1}/>
          <Parrafo>Llená el formulario, contactanos por WhatsApp o Instagram</Parrafo>
        </StepsDetail>

        <StepsDetail>
          <PicContainer stepNumber={step2}/>
          <Parrafo>Nosotros armamos tus viandas acorde a tus necesidades.</Parrafo>
        </StepsDetail>
        
        <StepsDetail>
          <PicContainer stepNumber={step3}/>
          <Parrafo>Obten tus viandas personalizadas listas para comer.</Parrafo>
        </StepsDetail>
        
        <StepsDetail>
          <PicContainer stepNumber={step4}/>
          <Parrafo>¡Alcanza tus objetivos sin preocuparte por tu alimentación!</Parrafo>
        </StepsDetail>

      </Step>

      <Link to="form" spy={true} smooth={true} offset={-100} duration={500}>
        <ContactButton>Comienza tu camino</ContactButton>
      </Link>

    </StepsContainer>
  )
}

export default Steps