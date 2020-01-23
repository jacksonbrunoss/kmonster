import React from 'react';

import * as S from './styled';

import { Brand }  from '../Brand/brand.js';

import Loc from '../../images/shape.png';
import Tel from '../../images/bitmap_2.png';
import Mail from '../../images/bitmap_3.png';

export const Footer = () => 
    <S.FooterWrapper>
        <S.FooterContainer>
            <S.FooterContent>
                <S.FooterContentItem>
                    <S.FooterContentItemBox>
                        <p>Português</p>
                        <S.FooterContentItemUl>
                            <S.FooterContentItemLi>
                                <S.FooterContentItemA><S.Bold>Social</S.Bold></S.FooterContentItemA>
                            </S.FooterContentItemLi>
                            <S.FooterContentItemLi>
                                <S.FooterContentItemA>Linkedin</S.FooterContentItemA>
                            </S.FooterContentItemLi>
                            <S.FooterContentItemLi>
                                <S.FooterContentItemA>Facebook</S.FooterContentItemA>
                            </S.FooterContentItemLi>
                            <S.FooterContentItemLi>
                                <S.FooterContentItemA>Instagram</S.FooterContentItemA>
                            </S.FooterContentItemLi>
                        </S.FooterContentItemUl>
                        <S.FooterContentItemUl>
                            <S.FooterContentItemLi>
                                <S.FooterContentItemA><S.Bold>Terms & Conditions</S.Bold></S.FooterContentItemA>
                            </S.FooterContentItemLi>
                            <S.FooterContentItemLi>
                                <S.FooterContentItemA>Privacy policy</S.FooterContentItemA>
                            </S.FooterContentItemLi>
                            <S.FooterContentItemLi>
                                <S.FooterContentItemA>Support</S.FooterContentItemA>
                            </S.FooterContentItemLi>
                            <S.FooterContentItemLi>
                                <S.FooterContentItemA>Chrom Extension</S.FooterContentItemA>
                            </S.FooterContentItemLi>
                        </S.FooterContentItemUl>
                    </S.FooterContentItemBox>
                </S.FooterContentItem>
                <S.FooterContentItem>
                    <S.FooterInfoContact>
                        <S.FooterInfoContactBox>
                            <S.FooterInfoContactBoxUl>
                                <S.FooterInfoContactBoxLi>
                                    <S.FooterInfoContactBoxA>Atibaia,SP - BRASIL <S.Icon src={Loc} alt="Alt" /></S.FooterInfoContactBoxA>
                                    <S.FooterInfoContactBoxA>Telefone:  + 55 (11) 4412-4235 <S.Icon src={Tel} alt="Alt" /></S.FooterInfoContactBoxA>
                                    <S.FooterInfoContactBoxA>E-mail: atendimento@kmonster.com <S.Icon src={Mail} alt="Alt" /></S.FooterInfoContactBoxA>
                                </S.FooterInfoContactBoxLi>
                            </S.FooterInfoContactBoxUl>
                        </S.FooterInfoContactBox>
                    </S.FooterInfoContact>
                    <Brand />
                </S.FooterContentItem>
            </S.FooterContent>
        </S.FooterContainer>
    </S.FooterWrapper>