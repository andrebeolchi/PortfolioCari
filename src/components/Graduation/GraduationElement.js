import styled from "styled-components";
import { Colors } from '../colors';

export const GraduationContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.darkPurple};

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480){
        height: 1300px;
    }
`

export const GraduationWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        /* grid-template-columns: 1fr 1fr; */
        grid-template-columns: 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const GraduationCard = styled.div`
    background: ${Colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    min-height: 280px;

    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover { 
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const GraduationIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const GraduationH1 = styled.h1`
    font-size: 2.5rem;
    color: ${Colors.white};
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem
    }
`

export const GraduationH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
`

export const GraduationP = styled.p`
    font-size: 1rem;
    text-align: center;
`