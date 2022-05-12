import React from 'react';

import { ModalContainer, 
         ModalWrapper, 
         Video,
         CloseModalButton
    } from './VideoModalElements';


export const VideoModal = ({showModal, setShowModal, url}) => {

    return (
        <>
            {showModal ? (
                <ModalContainer >
                    <ModalWrapper showModal={showModal}>
                        <Video src={url} type="video/mp4" controls/> 
                    </ModalWrapper>
                        <CloseModalButton onClick={() => setShowModal(prev => !prev)}/>
                </ModalContainer>
            ): null}
        </>
    )
}

export default VideoModal;