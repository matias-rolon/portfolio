import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponents'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>M|R</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Sobre mí</NavLink>
          <NavLink href='#skills'>Habilidades</NavLink>
          <NavLink href='#projects'>Proyectos</NavLink>
          <NavLink href='#education'>Educacion</NavLink>
          <NavLink href='#contact'>Contactame</NavLink>
        </NavItems>
        
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Sobre mí</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Habilidades</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Proyectos</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Educacion</MobileLink> 
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contactame</MobileLink> 
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar