import React from 'react';
import { Navbar } from '../Navbar/navbar.js';
import { Hero } from '../Hero/hero.js';

import * as S from './styled';

export const Header = () => 
    <S.HeaderWrapper>
        <Navbar />
        <Hero />
    </S.HeaderWrapper>