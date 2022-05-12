import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import {FaFileDownload} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR } from 'react-router-dom'
import {Colors} from '../colors.js'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${Colors.black};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: ${Colors.white};
`
export const DownloadIcon = styled(FaFileDownload)`
    font-size: 28px;
    margin-right: .6rem;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: ${Colors.white};
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(5, 80px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: ${Colors.white};
    cursor: pointer;

    &:hover{
        color: ${Colors.purple};
        transition: 0.2s ease-in-out;
    }
`
export const SidebarPageLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: ${Colors.white};
    cursor: pointer;

    &:hover{
        color: ${Colors.purple};
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

export const SidebarBtnLink = styled.a`
    border-radius: 50px;
    background: ${Colors.purple};
    white-space: nowrap;
    padding: 16px 64px;
    color: ${Colors.gray};
    font-weight: 700;
    font-size: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    display:flex;
    align-items: center;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: ${Colors.gray};
        color: ${Colors.lightBlack};	
    }
`
