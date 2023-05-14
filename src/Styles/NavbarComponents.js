import styled from 'styled-components';

export const NavContainer = styled.div`
    padding: 20px 0px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000; 
    transform: translateY(0); // Inicialmente, el navbar se muestra
    transition: transform 0.3s ease, background-color 0.3s ease; // Añade la transición para el transform

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const Logo = styled.img`
    margin-left: 10vw;
    width: 6vw;
    height: auto;
    @media screen and (max-width: 768px) {
        width: 15vw;
        margin-left: 0px;
    }
`;

export const NavigationContent = styled.ul`
    display: flex;
    margin-right: 10vw;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    margin-left: 40px;
    font-size: 1.3rem;
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    position: relative; 
    cursor: pointer; 

    &::after {
        content: '';
        position:
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px; 
        background-color: #6CBD45;
        transition: all 0.3s ease;
    }

    &:hover::after {
        left: 0;
        width: 100%;
    }
`;
