import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIcons, SocialLogo, SocialMedia,
    SocialMediaWrap, WebsiteRights
} from './FooterElement'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contatos</FooterLinkTitle>
                            <FooterLink target="_blank" href="mailto:carina.c.pizzo@gmail.com">Email</FooterLink>
                            <FooterLink target="_blank" href="tel:+5511992406787">Telefone</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Certificados</FooterLinkTitle>
                            <FooterLink target="_blank" href="">
                                Cultura Inglesa
                            </FooterLink>
                            <FooterLink target="_blank" href="">
                                Curso de Informática
                            </FooterLink>
                            <FooterLink target="_blank" href="">
                                Curso de Adobe
                            </FooterLink>
                            <FooterLink target="_blank" href="">
                                Curso de Revit, Bim e AutoCad
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Portfolio</SocialLogo>
                        <WebsiteRights>Carina Cisca Pizzo © 2021 - {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            {/* 
                            <SocialIconLink href="https://www.linkedin.com/in/andré-beolchi-72786a178/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin style={{fontSize: 32}}/>
                            </SocialIconLink> 
                            */}
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
