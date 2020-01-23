import React from 'react';

import * as S from './styled';
import  Img  from '../../images/bitmap.png';

export const Host = () => 
    <S.HostWrapper>
        <S.HostContainer>
            <S.HostContent>
                <S.HostContentItem>
                    <S.HostContentItemImg src={Img} alt="Img" />
                </S.HostContentItem>
                <S.HostContentItem>
                    <S.HostContentItemTitle>
                        Trabalhamos com os melhores serviços de hospedagem
                    </S.HostContentItemTitle>
                    <S.HostContentItemText>
                        Hospedamos nosso sistema em serviços de qualidade para que assim nossos produtos digitais possam ter uma melhor performance (AWS, Azure, Google Clound, Heroko)
                    </S.HostContentItemText>
                </S.HostContentItem>
            </S.HostContent>
        </S.HostContainer>
    </S.HostWrapper>