import React from 'react';

import * as S from './styled';
import ImgBtn from '../../images/chat-1.png';

export const ButtonContact = () => 
    <S.BtnContactWapper to="/contact">
        <S.BtnContactBox>
            <S.BtnContactImg src={ImgBtn} alt="" /> fale conosco
        </S.BtnContactBox>
    </S.BtnContactWapper>