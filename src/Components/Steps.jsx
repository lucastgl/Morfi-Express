import React from 'react'
import {StepsContainer, FourthTitle, StepsDetail, Parrafo, ContactButton, PicContainer} from '../Styles/StepsComponents'


const Steps = () => {
  return (
    <StepsContainer>
      <FourthTitle>Tus <span style={{color: "#6CBD45", fontWeight: 600}}>comidas</span> en solo cuatro pasos</FourthTitle>
      <StepsDetail>
        <PicContainer></PicContainer>
        <Parrafo>Llená el formulario, contactanos por WhatsApp o Instagram</Parrafo>
      </StepsDetail>
      <StepsDetail>
        <PicContainer></PicContainer>
        <Parrafo>Nosotros armamos tus viandas acorde a tus necesidades.</Parrafo>
      </StepsDetail>
      <StepsDetail>
        <PicContainer></PicContainer>
        <Parrafo>Obten tus viandas personalizadas listas para comer.</Parrafo>
      </StepsDetail>
      <StepsDetail>
        <PicContainer></PicContainer>
        <Parrafo>¡Alcanza tus objetivos sin preocuparte por tu alimentación!</Parrafo>
      </StepsDetail>
      <ContactButton>Comienza tu camino</ContactButton>
    </StepsContainer>
  )
}

export default Steps