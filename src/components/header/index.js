import React, { Component } from "react";
import { Nav, NavLogo, LogoImg, ContainerIcons, IconBars, IconTimes, NavMenu, NavItem, NavItemButton, StyledNavLink, NavButton } from "./HeaderElements";
// import { HeaderComponent } from "./HeaderComponent";
import logo from "../../assets/images/logo/logo-sasana-digital.png";

class Header extends Component {

    render () {
        
        return (
            <Nav>
                <NavLogo>
                    <LogoImg src={logo} alt="Logo Sasana Digital" />
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <StyledNavLink to ="/">
                            Beranda
                        </StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to ="/">
                            Profil
                        </StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to ="/">
                            Layanan
                        </StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to ="/">
                            Unduhan
                        </StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to ="/">
                            Kontak
                        </StyledNavLink>
                    </NavItem>
                    <NavItemButton>
                        <NavButton to ="/">Free Consulting</NavButton>
                    </NavItemButton>
                
                </NavMenu>
            </Nav>
        )
    }
}

export default Header;