import styled from 'styled-components';
import fondo from '../imgs/QuienesSomos.jpg'

export const AboutContainer = styled.div`
    height: 70vh;
    color: white;
    background-image:  url(${fondo});
    background-origin: border-box;
    background-size: cover;
    background-position: bottom right;
    @media screen and (min-width: 768px) {
        background-size: 220%;
        height: 75vh;
    }
`;

export const Gradient = styled.div`
    height: 70.5vh;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5));
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: -5px;
    @media screen and (min-width: 768px) {
        background: linear-gradient(270deg, rgba(0,0,0,0.3841911764705882) 0%, rgba(0,0,0,1) 93%);
        height: 75.5vh;
    }
`;


export const ThirdtTitle = styled.h2`
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 400;
    margin-left: 50px;
    margin-bottom: 19px;
    text-align: left;
    @media screen and (min-width: 768px) {
        margin-left: 10vw;
        margin-bottom: 30px;
        font-size: 4rem;
        width: 40%; 
    }
    @media only screen and (min-width: 768px) and (max-width: 1580px) {
        margin-left: 10vw;
        margin-bottom: 10px;
        font-size: 2.4rem;
        width: 40%; 
    }      
`;

export const Parrafo = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin-left: 50px;
    margin-bottom: 16px;
    text-align: left;
    width: 305px;
    @media screen and (min-width: 768px) {
        margin-left: 10vw;
        font-size: 2.2rem;
        width: 50%;
        margin-bottom: 30px;
        line-height: 1.5em;

    }
    @media only screen and (min-width: 768px) and (max-width: 1580px) {
        margin-left: 10vw;
        font-size: 1.8rem;
        width: 50%;
        margin-bottom: 15px;
        line-height: 1.1em;
    }
`;
