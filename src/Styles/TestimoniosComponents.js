import styled from 'styled-components';

export const TestimoniosContainer = styled.section`
    background-color: black;
    padding-top: 20px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
   align-items: center;
    margin-bottom: 30px;
`;

export const Linea = styled.img`
    width: 10%;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const TestimoniosTitle = styled.h2`
    color: white;
    width: 80%;
    text-align: center;
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 400;
    span{
        color: #6CBD45;
        font-weight: 600;
    }
    @media screen and (min-width: 768px) {
        width: auto;
        margin: 0px 20px;
        font-size: 3.2rem;
    } 
`;

export const TestimoniosContent = styled.div`
    position: relative;
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
`;


export const ComillasUp = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: auto;
    margin-left: 30px; 
    @media screen and (min-width: 768px) {
        margin-left: 20vw;
        width: 60px;    
    } 
`;


export const ComillasDown = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: auto;
    margin-right: 30px;
    @media screen and (min-width: 768px) {
        margin-right: 20vw;
        width: 60px;
        margin-bottom: 40px;
    } 
`;

export const TestimoniosParte1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        width: 50%;
        margin: 20px 20px;
    } 
`;

export const TestimoniosParte2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        width: 50%;
        margin: 20px 20px;
    } 
`;

export const Testimonio = styled.div`
    width: 55%;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: white;
    font-size: 20px;
    padding: 20px 0px;
    margin: 20px 20px;
    @media screen and (min-width: 768px) {
        font-size: 1.8rem;
    } 
`;

