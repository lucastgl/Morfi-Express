import styled from 'styled-components';
import fondo from '../imgs/QuienesSomos.jpg'

export const AboutContainer = styled.div`
    height: 70vh;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5)), url(${fondo});
    background-size: cover;
    background-position: bottom right;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


export const FirstTitle = styled.h2`
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
