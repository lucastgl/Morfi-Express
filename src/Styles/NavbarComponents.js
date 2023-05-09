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
    transition: background-color 0.3s ease;

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
    position: relative; // Añadido: para que el pseudo-elemento se posicione en relación a este elemento
    cursor: pointer; // Añadido: para indicar que el elemento es interactivo

    &::after {
        content: ''; // Añadido: para generar el pseudo-elemento
        position: absolute; // Añadido: para posicionar el pseudo-elemento
        bottom: 0; // Añadido: para alinear el subrayado con la parte inferior del texto
        left: 50%; // Añadido: para posicionar el inicio del subrayado en el centro
        width: 0; // Añadido: para que el subrayado inicie sin ancho
        height: 2px; // Añadido: para dar un grosor al subrayado
        background-color: #6CBD45; // Añadido: para que el subrayado tenga el mismo color que el texto
        transition: all 0.3s ease; // Añadido: para animar el subrayado
    }

    &:hover::after {
        left: 0; // Añadido: para que el subrayado se extienda hacia la izquierda
        width: 100%; // Añadido: para que el subrayado ocupe todo el ancho del elemento li
    }
`;
