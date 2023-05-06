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
    margin-bottom: 30px;
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
`;

export const TestimoniosContent = styled.div`
    position: relative;
`;


export const ComillasUp = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: auto;
    margin-left: 30px;
`;


export const ComillasDown = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: auto;
    margin-right: 30px;
`;

export const TestimoniosParte1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TestimoniosParte2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Testimonio = styled.div`
    width: 55%;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: white;
    font-size: 20px;
    padding: 20px 0px;
`;

