import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarBtnLink,
    DownloadIcon,
    SidebarPageLink
} from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="graduation" onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to="watchsec" onClick={toggle}>Projetos</SidebarLink>
                    <SidebarPageLink to="/contato" onClick={toggle}>Contato</SidebarPageLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtnLink href='https://drive.google.com/uc?id=1_mdMYc3_W8jrBj7JkT_AqVpIdofuSjZl&export=download' download><DownloadIcon />Currículo</SidebarBtnLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
