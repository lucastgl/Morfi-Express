import React from 'react'
import morfiLogo from '../imgs/MorfiExpressLogo.png'
import instagram from '../imgs/Instagram.png'
import tiktok from '../imgs/TikTok.png'
import facebook from '../imgs/Facebook.png'
import youtube from '../imgs/YouTube.png'
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
          {/* <RedSocial><img src={facebook} alt="facebook" /></RedSocial> */}
          <RedSocial><img src={instagram} alt="instagram" /></RedSocial>
          {/* <RedSocial><img src={tiktok} alt="tiktok" /></RedSocial>
          <RedSocial><img src={youtube} alt="youtube" /></RedSocial> */}
        </RedesSociales>
      </FooterContent>
      <WaterMark/>
    </FooterContainer>
  )
}

export default Footer