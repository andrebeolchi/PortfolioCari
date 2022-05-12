import React from 'react'
import AnhembiLogo from '../../assets/black_anhembi.png'
import {
    GraduationCard, GraduationContainer, GraduationH1,
    GraduationH2, GraduationIcon, GraduationP, GraduationWrapper
} from './GraduationElement'

const Graduation = () => {
    return (
        <GraduationContainer id="graduation">
            <GraduationH1>Formação Acadêmica</GraduationH1>
            <GraduationWrapper>
                <GraduationCard>
                    <GraduationH2>2020 - 2024</GraduationH2>
                    <GraduationIcon src={AnhembiLogo} alt="Logo da Faculdade Anhembi Morumbi"/>
                    <GraduationP>Arquitetura e Urbanismo</GraduationP>
                </GraduationCard>
            </GraduationWrapper>
        </GraduationContainer>
    )
}

export default Graduation
