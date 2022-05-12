import React, { useState } from 'react';
import { AButton } from '../ButtonElement';
import {
    ArrowForward,
    ArrowRight, HeroBtnWrapper, HeroContainer,
    HeroContent, HeroH1,
    HeroP
} from './HeroElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            {/* <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='data/mp4' disablePictureInPicture />
            </HeroBg> */}
            <HeroContent>
                <HeroH1>Carina Ciasca Pizzo</HeroH1>
                <HeroP>“Lion whistle whole older previous harder been bank six talk voyage practical progress dust since nervous signal string system weather”</HeroP>
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
