import React from 'react'
import morfiLogo from '../imgs/MorfiExpressLogo.png'
import tiktok from '../imgs/TikTok.png'
import instagram from '../imgs/Instagram.png'
import facebook from '../imgs/Facebook.png'
import youtube from '../imgs/YouTube.png'
import { FooterContainer, FooterContent, Logo, Subtitle, Data,  MailContainer, DireccionContainer, TelefonoContainer, RedesSociales, RedSocial } from '../Styles/FooterComponents'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={morfiLogo}></Logo>
        <MailContainer>
          <Subtitle>Mail:</Subtitle>
          <Data>morfi.express1@gmail.com</Data>
        </MailContainer>
        <DireccionContainer>
          <Subtitle>Dirección:</Subtitle>
          <Data>1510 Av. Regimientos de Patricios</Data>
          <Data>Barracas, CABA</Data>
        </DireccionContainer>
        <TelefonoContainer>
          <Subtitle>Telefono:</Subtitle>
          <Data>+54 9 11 5009-9402</Data>
        </TelefonoContainer>
        <RedesSociales>
          <RedSocial><img src={facebook} alt="facebook" /></RedSocial>
          <RedSocial><img src={instagram} alt="instagram" /></RedSocial>
          <RedSocial><img src={tiktok} alt="tiktok" /></RedSocial>
          <RedSocial><img src={youtube} alt="youtube" /></RedSocial>
        </RedesSociales>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer