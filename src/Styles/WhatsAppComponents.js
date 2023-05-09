import styled from 'styled-components';

export const WspContainer = styled.div`
  position: fixed;
  bottom: 40px; /* Modificado: aumentado para que el botón esté un poco más arriba */
  right: 20px;
  z-index: 1000;
  @media (max-width: 768px) {
    bottom: 30px; /* Modificado: aumentado para que el botón esté un poco más arriba en dispositivos móviles */
    right: 15px;
  }
`;

export const LinkWsp = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25d366;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const WspLogo = styled.img`
  width: 100%; /* Modificado: cambiado a 100% para que la imagen ocupe todo el contenedor */
  height: 100%; /* Modificado: cambiado a 100% para que la imagen ocupe todo el contenedor */
  object-fit: contain; /* Añadido: para mantener la proporción de la imagen al ocupar el 100% del contenedor */
  @media (max-width: 768px) {
    /* No se requieren cambios aquí, la imagen ya ocupa el 100% del contenedor */
  }
`;