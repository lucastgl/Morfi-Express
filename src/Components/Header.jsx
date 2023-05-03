import React from 'react'
import {Link} from "react-scroll"
import { HeaderContainer, ContactButton, FirstTitle, SubTitle} from '../Styles/HeaderComponents'

const Header = () => {
  return (
    <HeaderContainer>
      <FirstTitle>¡Simplifica tu <span>alimentación</span> con nuestras viandas!</FirstTitle>
      <SubTitle>Mientras nosotros nos ocupamos de tu dieta, ¡Tú te concentrás en tus objetivos!</SubTitle>
      <Link to="form" spy={true} smooth={true} offset={-100} duration={500}>
        <ContactButton>¡Contáctanos!</ContactButton>
      </Link>
    </HeaderContainer>
  )
}

export default Header