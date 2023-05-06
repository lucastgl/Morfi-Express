import styled from 'styled-components';
import fondo from "../imgs/FondoFormularioContacto.jpg"


export const FormBGImage = styled.div`
    height: 70vh;
    color: white;
    background: rgb(0,0,0);
    background: url(${fondo});
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    @media screen and (min-width: 760px){
        background-position: right;
    }
`;

export const FormBGgradient = styled.div`
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0.804359243697479) 58%, rgba(0,0,0,0) 82%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 760px){
        background: linear-gradient(270deg, rgba(0,0,0,0) 4%, rgba(0,0,0,0.639093137254902) 21%, rgba(0,0,0,1) 49%);
        align-items: start;

    }
    @media screen and (min-width: 1200px){
        padding-left: 150px;
        background: linear-gradient(257deg, rgba(0,0,0,0) 7%, rgba(0,0,0,0.9304096638655462) 35%, rgba(0,0,0,1) 47%, rgba(22,22,22,1) 87%);
`;

export const LastTitle = styled.h2`
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    @media screen and (min-width: 730px){
        padding-left: 50px;
    }
    @media screen and (min-width: 1200px){
        font-size: 3rem;
    }      
`;

export const FormContainer = styled.div`
    width: 80%;
    @media screen and (min-width: 760px){
        width: 40%;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    @media screen and (min-width: 730px){
        padding-left: 50px;
    }
`;

export const FistPart = styled.div`
    @media screen and (min-width: 730px){
        display: flex;   
    }
`;

export const Input = styled.input`
    color: #f0f0f0;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    height: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background: linear-gradient(149deg, rgba(139,139,139,1) 0%, rgba(74,74,74,1) 62%, rgba(22,22,22,1) 100%);
    border-color: #c2bfbf;
    opacity: 0.65!important;
    ::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #aaaaaa;
    }
    @media screen and (min-width: 1200px){
        height: 45px;
        font-size: 1.2rem;
        ::placeholder {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: #f0f0f0;
        }
    }   
`;

export const Textarea = styled.textarea`
    color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    height: 200px;
    padding: 5px;
    border-radius: 5px;
    border-color: #c2bfbf;
    outline: none;
    resize: none;
    background: linear-gradient(149deg, rgba(139,139,139,1) 0%, rgba(74,74,74,1) 62%, rgba(22,22,22,1) 100%);
    opacity: 0.65!important;
    ::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #f0f0f0;
    }
    @media screen and (min-width: 1200px){
        font-size: 1.2rem;
        ::placeholder {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: #f0f0f0;
        }
    }  
`;

export const Error = styled.p`
    font-family: 'Roboto', sans-serif;
    z-index: 100;
    position: relative;
    font-size: 10px;
    padding: 0;
    margin: 0;
    color: #6CBD45;
    @media screen and (min-width: 1200px){
        font-size: 1.05rem;
    }
`;

export const ButtonContainer = styled.div`
    flex-grow; 1;
    display: flex;
    justify-content: center;
    width: 100%;
    @media screen and (min-width: 1200px){
        font-size: 1.2rem;
        padding-left: 55px;
        justify-content: start;
    }
`;

export const Button = styled.button`
    color: white;
    background-color: #6CBD45;
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    border-radius: 10px;
    padding: 4px 10px;
    border-style: none;
    margin-top: 30px;
    scale: 1.20;
    @media screen and (min-width: 1200px){
        font-size: 1.6rem;
    }
`;


