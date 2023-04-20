import styled from 'styled-components';
import fondo from '../imgs/HomepageOpeningMobile.jpg'

export const HeaderContainer = styled.div`
    height: 100vh;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fondo});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;    
`;

export const FirstTitle = styled.h1`
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 500;
    padding-bottom: 14px; 
`;

export const SubTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 16px;
    padding-bottom: 28px;
    width: 300px;
`;

export const ContactButton = styled.button`
    color: white;
    background-color: #6CBD45;
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    border-radius: 10px;
    padding: 4px 8px;
    border-style: none;
`;