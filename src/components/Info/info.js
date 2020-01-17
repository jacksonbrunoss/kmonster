import React from 'react';

import * as S from './styled';
import Undraw from '../../images/undraw-experience-design-eq-3-j.png';

export const Info = () => 
    <S.InfoWrapper>
        <S.InfoContainer>
            <S.InfoContent>
                <S.InfoContentItem>
                    <S.InfoContentImgBox src={Undraw} alt="" />
                </S.InfoContentItem>
                <S.InfoContentItem>
                    <S.InfoContentItemTitle>
                        Nosso time está preparado para o que der e vier!
                    </S.InfoContentItemTitle>    
                    <S.InfoContentItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </S.InfoContentItemText>
                    <S.InfoContentItemText>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </S.InfoContentItemText>
                </S.InfoContentItem>
            </S.InfoContent>
        </S.InfoContainer>
    </S.InfoWrapper>