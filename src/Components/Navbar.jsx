import React , {useState, useEffect} from 'react'
import {Link} from "react-scroll"
import logo from "../imgs/MorfiExpressLogo.png";
import { NavContainer, NavigationContent, Logo, NavItem } from '../Styles/NavbarComponents';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = currentScrollPos < lastScrollPos;

    if (isScrollingUp && currentScrollPos > 50) {
      setScrolled(true);
      setHidden(false);
    } else if (currentScrollPos === 0) {
      setScrolled(false);
      setHidden(false);
    } else {
      setHidden(true);
    }

    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <NavContainer
      style={{
        backgroundColor: scrolled ? 'black' : 'rgba(0, 0, 0, 0)',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <Link to="header" spy={true} smooth={true} offset={-100} duration={500}>
        <Logo src={logo}/>
      </Link>
      <NavigationContent>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          <NavItem>Conócenos</NavItem>
        </Link>
        
        <Link to="team" spy={true} smooth={true} offset={-100} duration={500}>
          <NavItem>Atletas</NavItem>
        </Link>
        
        <Link to="clientes" spy={true} smooth={true} offset={-100} duration={500}>
          <NavItem>Clientes</NavItem>
        </Link>
        
        <Link to="form" spy={true} smooth={true} offset={-100} duration={500}>
          <NavItem>Contáctenos</NavItem>
        </Link>
      </NavigationContent>
    </NavContainer>
  )
}

export default Navbar