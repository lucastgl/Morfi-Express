import styled from 'styled-components';
import fondoMobile from '../imgs/HomepageOpeningMobile.jpg'
import fondoDesktop from '../imgs/HomepageOpeningDesktop.jpg'


export const HeaderBox = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${fondoDesktop});
    background-size: cover;
    @media screen and (max-width: 768px) {
        background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fondoMobile});
    }
`;

export const HeaderContainer = styled.div`
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }    
`;
    
export const FirstTitle = styled.h1`
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 500;
    padding-bottom: 14px;
    span {
        color: #6CBD45;
        font-weight: 700;
    }

    @media screen and (min-width: 767px) and (max-width: 1600px) {
        margin-left: 10vw;
        font-size: 3rem;
        width: 47%;
        margin-top: 90px; 
    }

    @media screen and (min-width: 1600px) {
        margin-left: 10vw;
        font-size: 4rem;
        width: 60%; 
    }
`;

export const SubTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 16px;
    padding-bottom: 28px;
    width: 300px;


    @media screen and (min-width: 767px) and (max-width: 1600px) {
        margin-left: 10vw;
        font-size: 1.5rem;
        width: 36%;
    }

    @media screen and (min-width: 1600px) {
        margin-left: 10vw;
        font-size: 1.8rem;
        width: 28%;
    }
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

    @media screen and (min-width: 767px) and (max-width: 1600px) {
        margin-left: 10vw;
        font-size: 1.5rem; 
    }


    @media screen and (min-width: 1600px) {
        margin-left: 10vw;
        font-size: 1.9rem; 
    }
`;