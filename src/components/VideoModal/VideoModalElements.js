import styled from "styled-components"
import { MdClose } from 'react-icons/md';
import {Colors} from '../colors'

export const ModalContainer = styled.div`
    background: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalWrapper = styled.div`
    position: relative;
    z-index: 9;
    width: 1088px;
    height: 612px;
    
    @media screen and (max-width: 1100px) {
        width: 768px;
        height: 432px;
    }

    @media screen and (max-width: 780px) {
        width: 480px;
        height: 270px;
    }

    @media screen and (max-width: 500px) {
        width: 320px;
        height: 180px;
    }
    `

export const Video = styled.video`
    width: 100%;
    height: 100%;
    border: none;
`

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 5vh;
    right: 5vw;
    width: 48px;
    height: 48px;
    padding: 0;
    z-index: 9;

    &:hover{
        color: ${Colors.purple};
    }
`