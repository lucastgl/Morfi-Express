import styled from 'styled-components';

export const WaterMarkContainer = styled.div`
    height: 8vh;
    background-color: #086BFA;
    color: white;
    font-family: 'Barlow', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 760px) {
        height: auto;
        flex-direction: row;
        justify-content: space-around;
        align-items: end;
    }
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    @media screen and (min-width: 760px) {
        margin: 15px 0px;
        scale: 1.5;
    }
`;

export const CopyRight = styled.p`
    margin-bottom: 10px;
    @media screen and (min-width: 760px) {
        margin: 15px 0px;
        scale: 1.5;
    }
`;