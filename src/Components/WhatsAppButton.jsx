import React from 'react';
import {WspContainer, LinkWsp, WspLogo} from "../Styles/WhatsAppComponents";
import logo from "../imgs/WhatsappLogo.png"

const WhatsAppButton = () => {
  return (
    <WspContainer>
        <LinkWsp href='https://api.whatsapp.com/send?phone=5491150099402'>
            <WspLogo src={logo}/>
        </LinkWsp>
    </WspContainer>
  )
}

export default WhatsAppButton