import React from 'react'
import {StepsContainer, FourthTitle, StepsDetail, Parrafo, ContactButton, PicContainer} from '../Styles/StepsComponents'
import step1 from "../imgs/IconoFormulario.png"
import step2 from "../imgs/IconoPreparacion.png"
import step3 from "../imgs/IconoObjetivo.png"
import step4 from "../imgs/IconoVianda.png"

const Steps = () => {
  return (
    <StepsContainer>
      <FourthTitle>Tus <span style={{color: "#6CBD45", fontWeight: 600}}>comidas</span> en solo cuatro pasos</FourthTitle>
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
      <ContactButton>Comienza tu camino</ContactButton>
    </StepsContainer>
  )
}

export default Steps