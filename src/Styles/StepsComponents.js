import styled from 'styled-components';
import step1 from "../imgs/IconoFormulario.png"
import step2 from "../imgs/IconoPreparacion.png"
import step3 from "../imgs/IconoObjetivo.png"
import step4 from "../imgs/IconoVianda.png"

export const StepsContainer = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FourthTitle = styled.h2`
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 400;
    padding-bottom: 40px; 
`;

export const StepsDetail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0px 32px;
`;

export const PicContainer = styled.div`
    height: 100px;
    min-width: 130px;
    background: url(${props => props.stepNumber});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

`;

export const Parrafo = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    text-align: left;
    padding-left: 16px
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
    margin-top: 30px
`;