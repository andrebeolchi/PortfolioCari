import styled from "styled-components";
import {Colors} from "../colors";

export const InfoContainer = styled.div`
    color: ${Colors.white};
    background: ${({lightBg}) =>  (lightBg ? '#f9f9f9' : '#060106')};

`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: 100vh;
    height: fit-content;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px){
        padding: 150px 0;
    }

`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`
                                                         : `'col1 col1'
                                                            'col2 col2'`)};
    }
    
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`


export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: ${Colors.purple};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#060106')};


    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`

export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#060106' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 350px;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    margin: auto;

    @media screen and (max-width: 768px) {
        max-width: 175px;
    }
`

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`