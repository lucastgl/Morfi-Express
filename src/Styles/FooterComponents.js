import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: #10140E;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #10140E;
    @media screen and (min-width: 760px) {
        height: 100%;
    } 
`;

export const Logo = styled.img`
    margin-top: 65px;
    @media screen and (min-width: 760px) and (max-width: 1599px) {
        margin-top: 60px;
        width: 7vw;
        height: auto;
    }
    @media screen and (min-width: 1600px) {
        margin-top: 60px;
        width: 7vw;
        height: auto;
        margin-bottom: 30px;
    } 
`;

export const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 760px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        font-size: 2rem;
    } 
`;

export const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px 0px;
    @media screen and (min-width: 760px) {
        margin: 40px 30px 40px 30px;    
        width: 25%;
    } 
`;

export const Subtitle = styled.p`
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    font-size: 20px;
    @media screen and (min-width: 760px) and (max-width: 1599px) {
        font-size: 1.6rem;
        padding-bottom: 10px;
    } 
    @media screen and (min-width: 1600px) {
        font-size: 2rem;
        padding-bottom: 15px;
    } 
`;

export const Data = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 18px;
    @media screen and (min-width: 760px) and (max-width: 1599px) {
        font-size: 1rem;
    } 
    @media screen and (min-width: 1600px) {
        font-size: 1.6rem;
        text-align: center;
    }
`;

export const RedesSociales = styled.div`
    padding: 0;
    list-style: none;
    display: flex;
    margin-bottom: 20px;
    @media screen and (min-width: 760px) and (max-width: 1599px) {
        margin-bottom: 60px;
    }
    @media screen and (min-width: 1600px) {
        margin-bottom: 60px;
    }
`;

export const RedSocial = styled.button`
    margin: 0px 15px;
    padding: 2.5px 2px 2px 2px;
    background-color: #6CBD45;
    border-radius: 28px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease, border-color 0.3s ease; 
    border: 3px solid transparent; 
    
    &:hover {
        background-color: #4C8133;
        border: 3px solid #6CBD45;
    }
    
    a {
        img {
            padding: 7px;
            width: 50px;
        }
    }
`;