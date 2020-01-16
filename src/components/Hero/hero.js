import React from  'react';
import ImgHero from '../../images/log-3.png';
import * as S from './styled';


export const Hero = () => 
    <S.HeroWrapper>
        <S.HeroContainer>
            <S.HeroContent>
                <S.HeroBox>
                    <S.HeroBoxItem>
                        <S.HeroBoxItemTitle>Não criamos apenas <S.HeroBoxItemTextBold>Produtos</S.HeroBoxItemTextBold>,<br /> criamos verdadeiras <S.HeroBoxItemTextColor>Experiências</S.HeroBoxItemTextColor></S.HeroBoxItemTitle>
                        <S.HeroBoxItemSubTitle>
                        Nós da K-Monster estamos sempre focados em entregar a melhor solução com a mais intensa experiência digital para os nossos clientes, para isso contamos com uma equipe extremamente competente e qualificada.
                        </S.HeroBoxItemSubTitle>
                        <S.HeroBoxItemBtnWrapper>
                            <S.HeroBoxItemBtnBox>Faça um orçamento com a gente!</S.HeroBoxItemBtnBox>
                        </S.HeroBoxItemBtnWrapper>
                    </S.HeroBoxItem>
                    <S.HeroBoxItem>
                        <S.HeroBoxItemImg src={ImgHero} alt="" />
                    </S.HeroBoxItem>
                </S.HeroBox>
            </S.HeroContent>
        </S.HeroContainer>
    </S.HeroWrapper>