import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: black;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    @media screen and (min-width: 760px) {
        height: 100%;
    } 
`;

export const Logo = styled.img`
    margin-top: 65px;
    @media screen and (min-width: 760px) {
        width: 10vw;
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
        margin: 15px 30px 40px 30px;    
        width: 25%;
    } 
`;

export const Subtitle = styled.p`
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    font-size: 20px;
    @media screen and (min-width: 760px) {
        font-size: 2rem;
    } 
`;

export const Data = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 18px;
    @media screen and (min-width: 760px) {
        font-size: 1.6rem;
        text-align: center;
    }
`;

export const RedesSociales = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    margin-bottom: 20px;
`;

export const RedSocial = styled.li`
    margin: 0px 15px;
`;