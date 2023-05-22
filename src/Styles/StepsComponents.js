import styled from 'styled-components';

export const StepsContainer = styled.div`
    background-color: white;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) and (max-width: 1400px){
        min-height: auto!important;
    } 
    
    @media screen and (min-width: 1400px) {
        min-height: 70vh;
    } 
`;

export const FourthTitle = styled.h2`

    font-family: 'Barlow', sans-serif;
    font-style: italic;
    font-weight: 400;
    margin: 40px 0px;
    img{
        display: none;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1599px){
        font-size: 2.3rem;
        display: flex;
        align-items: center;
        img{
            margin: 0px -15px;
            display: block;
            scale: .8;
        }
    }     

    @media screen and (min-width: 1600px) {
        font-size: 3.2rem;
        display: flex;
        align-items: center;
        margin: 80px 0px;
        img{
            margin: 0px 15px;
            display: block; 
        }
        span{
            margin: 10px!important;
        }
    } 
`;

export const Step = styled.div`
    @media screen and (min-width: 768px) and (max-width: 1599px){
        display: flex;
        width: 85%;
    }   
    @media screen and (min-width: 1600px) {
        display: flex;
        width: 80%;
    } 
`;

export const StepsDetail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0px 32px;

    @media screen and (min-width: 768px) {
        flex-direction: column;
        margin-bottom: 0px;
        padding: 0px 0px;
        
    } 
`;

export const PicContainer = styled.div`
    height: 100px;
    min-width: 130px;
    background: url(${props => props.stepNumber});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    @media screen and (min-width: 768px) and (max-width: 1400px){
        display: flex;
    }
    @media screen and (min-width: 1400px) {
        display: flex;
        height: 160px;
        min-width: 220px;
    }   
`;

export const Parrafo = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    text-align: left;
    padding-left: 16px;

    @media screen and (min-width: 768px) and (max-width: 1599px){
        margin-top: 40px;
        text-align: center;
        width: 68%;
    }
    @media screen and (min-width: 1600px) {
        margin-top: 40px;
        text-align: center;
        font-size: 1.8rem;
        width: 70%;
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
    margin: 40px 0px;

    @media screen and (min-width: 768px) and (max-width: 1599px){
        font-size: 20px;
    }
    @media screen and (min-width: 1600px) {
        margin: 70px 0px 50px 0px;
        font-size: 2rem;
    }
`;