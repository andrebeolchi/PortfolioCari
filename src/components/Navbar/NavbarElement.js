import { FaBars, FaFileDownload } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import { Colors } from '../colors.js';


export const Nav = styled.nav`
    background-color: ${({scrollNav}) => (scrollNav ? Colors.darkBlack : Colors.darkBlack)};
    margin-top: -80px;
    height: 80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.3s all ease-in-out;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px 0 0;
    max-width: 1100px;
`
export const NavLogo = styled(LinkS)`
    text-decoration: none;
    color: ${Colors.gray};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: ${Colors.gray}
    }
`
export const BurgerBar = styled(FaBars)`
    font-size: 1.8rem;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: ${Colors.gray};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 500;
    
    &.active{
        border-bottom: 3px solid ${Colors.purple};
    }
    
    &:hover{
        font-weight: 600;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavPageLinks = styled(LinkR)`
    color: ${Colors.gray};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 500;
    
    &.active{
        border-bottom: 3px solid ${Colors.purple};
    }
    
    &:hover{
        font-weight: 600;
    }
`

export const NavBtnLink = styled.a`
    border-radius: 50px;
    background: ${Colors.purple};
    white-space: nowrap;
    padding: 10px 32px;
    color: ${Colors.darkBlack};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;

    display: flex;
    align-items: center;

    &:hover{
        transition: all 0.3s ease-in-out;
        background-color: ${Colors.gray};
        color: ${Colors.lightBlack};
    }
`

export const NavFileDownload = styled(FaFileDownload)`
    font-size: 22px;
    margin-right: 8px;
`