import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Colors } from '../colors';
import {
    BurgerBar, MobileIcon, Nav,
    NavbarContainer, NavBtn, NavBtnLink, NavFileDownload, NavItem,
    NavLinks, NavLogo, NavMenu, NavPageLinks
} from './NavbarElement';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: Colors.white }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo onClick={toggleHome}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Portfolio
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <BurgerBar />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="graduation"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >Formação
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="watchsec"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>
                                    Projetos
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavPageLinks to="/contato">Contato</NavPageLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink href="#">
                                <NavFileDownload
                                    style={{
                                        color: Colors.darkBlack,
                                    }}
                                />
                                Currículo
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar