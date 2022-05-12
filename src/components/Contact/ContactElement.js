import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Colors } from '../colors';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    padding: 30px 5px;
    background: linear-gradient(
        108deg, 
        #9DC62A 0%,
        #B1E02D 100%
    );
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: ${Colors.white};
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        text-align: center;
        margin-left: 0px;
        margin-top: 0px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 600px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background-color: ${Colors.darkBlack};
    max-width: 800px;
    width: 30vw;
    height: auto;
    z-index: 100%;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    
    @media screen and (max-width: 600px){
        padding: 32px 32px;
        width: 90vw;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 50px;
    color: ${Colors.white};
    font-size: 24px;
    font-weight: 500;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: ${Colors.white};
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    `

export const FormTextArea = styled.textarea`
    padding: 8px 8px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    resize: none;
    height: 120px;
`

export const FormButton = styled.button`
    background-color: ${Colors.purple};
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: ${Colors.darkBlack};
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    
    
    &:hover {
        background-color: ${Colors.white};
        color: ${Colors.darkBlack};
        font-weight: bold;
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: ${Colors.white};
    font-size: 14px;
`