import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header/header.js';
import { Services } from '../components/Services/services.js';
import { Info } from '../components/Info/info.js';

import BGHome from '../images/bg-header.png';

const HomeLayout = styled.main`
    width: 100%;
    height: 100%;
    background-image: url(${BGHome});
    background-position: right top;
    background-size: 900px;
    background-repeat: no-repeat;
`;

export const Home = () => {
    return (
        <HomeLayout>
            <Header />
            <Services />
            <Info />   
        </HomeLayout>
    )
}