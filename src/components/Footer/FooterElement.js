import styled from "styled-components";
import { Colors } from "../colors";
import { Link } from "react-router-dom"
import { FaRecycle } from "react-icons/fa";

export const FooterContainer = styled.footer`
    background-color: ${Colors.white};
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: ${Colors.darkBlack};

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled.a`
    color: ${Colors.darkBlack};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    word-wrap: break-word;
    display: flex;
    align-items: center;

    width: 40vw;

    &:hover{
        color: ${Colors.purple};
        font-weight: 600;
        transition: all 0.1s ease-in-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: ${Colors.darkBlack};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    
    @media screen and (max-width:480px){
        margin-bottom: 16px;
    }
`

export const WebsiteRights = styled.small`
    color: ${Colors.darkBlack};

    @media screen and (max-width:480px){
        margin-bottom: 16px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: ${Colors.darkBlack};
    font-size: 24px;

    &:hover{
        color: ${Colors.purple};
        transition: all 0.2s ease-in-out;
    }
`

export const Recycle = styled(FaRecycle)`
    margin-right: 8px;
    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`