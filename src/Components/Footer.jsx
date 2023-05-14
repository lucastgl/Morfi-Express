import React from 'react'
import morfiLogo from '../imgs/MorfiExpressLogo.png'
import instagram from '../imgs/Instagram.png'
import { FooterContainer, FooterContent, Logo, Subtitle, Data,  ContactContainer, Container, RedesSociales, RedSocial } from '../Styles/FooterComponents'
import WaterMark from './WaterMark'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={morfiLogo}></Logo>
        <ContactContainer>
          <Container>
            <Subtitle>Mail:</Subtitle>
            <Data>morfi.express1@gmail.com</Data>
          </Container>
          <Container>
            <Subtitle>Dirección:</Subtitle>
            <Data>1510 Av. Regimientos de Patricios</Data>
            <Data>Barracas, CABA</Data>
          </Container>
          <Container>
            <Subtitle>Telefono:</Subtitle>
            <Data>+54 9 11 5009-9402</Data>
          </Container>
        </ContactContainer>
        <RedesSociales>
          <RedSocial><a href='https://www.instagram.com/morfi.express1/?hl=es'><img src={instagram} alt="instagram" /></a></RedSocial>
        </RedesSociales>
      </FooterContent>
      <WaterMark/>
    </FooterContainer>
  )
}

export default Footer