import React from 'react'
import { TestimoniosContainer, TitleContainer, TestimoniosTitle, TestimoniosContent, ComillasUp, ComillasDown, TestimoniosParte1, TestimoniosParte2, Testimonio } from '../Styles/TestimoniosComponents'
import comillas1 from "../imgs/Testimonios/Comillas.png"
import comillas2 from "../imgs/Testimonios/Comillas2.png"

const Testimonios = () => {
  return (
    <TestimoniosContainer>
        <TitleContainer>
            <TestimoniosTitle>¿Qué opinan nuestro <span>clientes</span> sobre Morfi?</TestimoniosTitle>
        </TitleContainer>
        <TestimoniosContent>
            <ComillasUp src={comillas1}/>
            <TestimoniosParte1>
                <Testimonio>¡Muy rica la comida y muy fresca!</Testimonio>
                <Testimonio>Muy contento! Era lo que estaba buscando! En cuanto se terminen voy a volver a encargar.</Testimonio>
            </TestimoniosParte1>
            <TestimoniosParte2>
                <Testimonio>Súper! Son unos genios! Gracias siempre por la buena onda que tienen!</Testimonio>
                <Testimonio>Ya probé las hamburguesas con papas y zapallitos. Muy rico todo!!</Testimonio>
            </TestimoniosParte2>
            <ComillasDown src={comillas2}/>
        </TestimoniosContent>
    
    </TestimoniosContainer>
  )
}

export default Testimonios