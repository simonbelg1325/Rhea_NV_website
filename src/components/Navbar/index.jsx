import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavLinks,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Logo from '../../images/rhea-logo.png';

const Navbar = () => (
  <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={Logo} alt="logo" />
        </NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home">HOME</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="maintenace">MAINTENANCE</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="legacy">LEGACY</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="enhanced">ENHANCED</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="references">REFERENCES</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contactUs">CONTACT US</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/helpdesk">HELPDESK</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  </>
);

export default Navbar;
