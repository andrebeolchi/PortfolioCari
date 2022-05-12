import React, { useState } from 'react';
import Video from '../../assets/backgroundVideo.mp4';
import { AButton } from '../ButtonElement';
import {
    ArrowForward,
    ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer,
    HeroContent, HeroH1,
    HeroP,
    VideoBg
} from './HeroElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='data/mp4' disablePictureInPicture />
            </HeroBg>
            <HeroContent>
                <HeroH1>Carina Ciasca Pizzo</HeroH1>
                <HeroP>Raspe para ver a minha biografia</HeroP>
                <HeroP>{"▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒"}</HeroP>
                <HeroBtnWrapper>
                    <AButton to="/contato" 
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}>
                        Contato {hover ? <ArrowForward /> : <ArrowRight />}
                    </AButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
export default HeroSection
