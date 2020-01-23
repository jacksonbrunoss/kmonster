import React from 'react';

import * as S from './styled';
import  Img  from '../../images/process.png';

export const Process = () => 
    <S.ProcessWrapper>
        <S.ProcessContainer>
            <S.ProcessContent>
                <S.ProcessTitle>Processo de desenvolvimento</S.ProcessTitle>
                <S.ProcessSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</S.ProcessSubTitle>
                <S.ProcessBoxImg src={Img} alt="Img" />
            </S.ProcessContent>
        </S.ProcessContainer>
    </S.ProcessWrapper>
