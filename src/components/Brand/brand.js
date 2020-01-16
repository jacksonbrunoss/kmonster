import React from 'react';

import * as S from './styled';
import BrandImg from '../../images/brand.png';

export const Brand = () => 
	<S.BrandWapper to="/">
        <S.BrandBox src={BrandImg} alt="" />
    </S.BrandWapper>


