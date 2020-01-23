import React from 'react';

import * as S from './styled';
import  Mobile from '../../images/phone.png';

export const Responsive = () => 
    <S.ResponsiveWrapper>
        <S.ResponsiveContainer>
            <S.ResponsiveContent>
                <S.ResponsiveContentItem>
                    <S.ResponsiveContentItemTitle>
                        Responsividade de todos <br />produtos.
                    </S.ResponsiveContentItemTitle>
                    <S.ResponsiveContentItemText>
                        Garantimos todo o sistema responsivo para devices <br />mobile, tablet, desktop & tv.<br /><br />
                        Nossos produtos tem foco total em qualidade da <br />criação ao desenvolvimento.
                    </S.ResponsiveContentItemText>
                    <S.ResponsiveContentItemBtn>Saiba mais</S.ResponsiveContentItemBtn>
                </S.ResponsiveContentItem>
                <S.ResponsiveContentItem>
                    <S.ResponsiveContentItemImg src={Mobile} alt="app" />
                </S.ResponsiveContentItem>
            </S.ResponsiveContent>
        </S.ResponsiveContainer>
    </S.ResponsiveWrapper>