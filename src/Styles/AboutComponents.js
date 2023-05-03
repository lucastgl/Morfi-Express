import styled from 'styled-components';
import fondo from '../imgs/QuienesSomos.jpg'

export const AboutContainer = styled.div`
    height: 70vh;
    color: white;
    background-image:  url(${fondo});
    background-origin: border-box;
    background-size: cover;
    background-position: bottom right;
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
`;


export const ThirdtTitle = styled.h2`
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 400;
    margin-left: 50px;
    margin-bottom: 19px;
    text-align: left;    
`;

export const Parrafo = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin-left: 50px;
    margin-bottom: 16px;
    text-align: left;
    width: 305px;
`;
