import styled from 'styled-components';

export const WaterMarkContainer = styled.div`
    height: 8vh;
    background-color: #086BFA;
    color: white;
    font-family: 'Barlow', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (min-width: 760px) and (max-width: 1599px){
        height: 60px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width: 1600px) {
        height: 60px;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
    }
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    @media screen and (min-width: 760px) and (max-width: 1599px) {
        scale: 1;
        padding-left: 140px;
    }
    @media screen and (min-width: 1600px) {
        margin: 15px 0px;
        scale: 1.5;
        padding-left: 270px;
    }
`;

export const CopyRight = styled.p`
    @media screen and (min-width: 760px) and (max-width: 1599px) {
        margin-bottom: 0px;
        scale: 1;
        padding-right: 140px;
    }
    @media screen and (min-width: 1600px) {
        margin: 15px 0px;
        font-size: 1.42rem;
        padding-right: 270px;
    }
`;