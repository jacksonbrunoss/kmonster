import React from 'react';
import { Brand } from '../Brand/brand.js';
import { ButtonContact } from '../ButtonContact/btncontact.js';
import * as S from './styled.js';

export const Navbar = () =>
    <S.NavbarWrapper>
        <S.NavbarContainer>
            <S.NavbarContent>
                <Brand />
                <ButtonContact />
            </S.NavbarContent>
        </S.NavbarContainer>
    </S.NavbarWrapper>