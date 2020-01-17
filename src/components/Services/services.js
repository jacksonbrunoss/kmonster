import React from 'react';

import services from './content';
import * as S from './styled';

import { TitleBox } from '../TitleBox/title.js';

export const Services = () => 
    <S.ServicesWrapper>
        <S.ServicesContainer>
            <S.ServicesContent>
                <TitleBox text="Somos Monstros no que fazemos!" />
                <S.ServicesBox>
                    {services.map((id,  i) => (
                        <S.ServicesBoxItem key={i}>
                            <S.ServicesImgItem src={id.img} alt={id.service} />
                            <S.ServicesTitleItem>{id.service}</S.ServicesTitleItem>
                            <S.ServicesTextItem>{id.desc}</S.ServicesTextItem>
                        </S.ServicesBoxItem>
                    ))}
                </S.ServicesBox>
            </S.ServicesContent>
        </S.ServicesContainer>
    </S.ServicesWrapper>