import React from 'react'
import blow from '../imgs/blow.png'
import { WaterMarkContainer, Brand, CopyRight } from '../Styles/WaterMarkComponents'

const WaterMark = () => {
  return (
    <WaterMarkContainer>
        <Brand>
            <p style={{marginRight: "5px"}}>POWERED by</p>
            <img src={blow} style={{height: "15px"}}/>
        </Brand>
        <CopyRight>© 2023 Copyright | <a style={{color: "white"}} href="https://www.instagram.com/blow.arg/" target="_blank">instagram.com/blow.arg/</a></CopyRight>
    </WaterMarkContainer>
  )
}

export default WaterMark