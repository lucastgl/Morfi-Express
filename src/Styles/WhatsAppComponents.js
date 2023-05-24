import styled from 'styled-components';

export const WspContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 100px;
  z-index: 1000;
  @media (max-width: 768px) {
    bottom: 30px; 
    right: 15px;
  }
`;

export const LinkWsp = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const WspLogo = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: contain; 
`;