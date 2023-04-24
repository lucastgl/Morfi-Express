import styled from 'styled-components';
import fondo from "../imgs/FondoFormularioContacto.jpg"


export const FormBGImage = styled.div`
    height: 80vh;
    color: white;
    background: rgb(0,0,0);
    background: url(${fondo});
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
`;

export const FormBGgradient = styled.div`
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0.804359243697479) 58%, rgba(0,0,0,0) 82%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

export const LastTitle = styled.h2`
    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;    
`;

export const FormContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

export const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    outline: none;
    height: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    opacity: 0.5;
    ::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #939393;
    }
`;

export const Textarea = styled.textarea`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    height: 200px;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    resize: none;
    opacity: 0.5;
    ::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #939393;
    } 
`;

export const Error = styled.p`
    z-index: 100;
    position: relative;
    font-size: 10px;
    padding: 0;
    margin: 0;
    color: #6CBD45;
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
`;


