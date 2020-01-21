import React from 'react';
import styled from 'styled-components';

import { FormContact } from '../components/FormContact/formcontact.js';

const LayoutContact = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
`;
const LayoutContactItem = styled.section`
    width: 100%;
    flex: 1 1 50%;
`;
const LayoutContactItemBox = styled.div`
    width: 100%;
    height: auto;
    padding: 70px 0px;
    background-image: linear-gradient(to bottom, #687af6, #4c37da 90%);
`;
const LayoutContactItemBoxTitle = styled.h3`
    font-size: 2.5rem;
    color: #fff;
    font-weight: 600;
    text-align: center;
`;


export const Contact = () => {
    return (
        <LayoutContact>
            <LayoutContactItem>
                <LayoutContactItemBox>
                    <LayoutContactItemBoxTitle>Olá, tudo bem?</LayoutContactItemBoxTitle>
                </LayoutContactItemBox>
            </LayoutContactItem>
            <LayoutContactItem>
                <FormContact />
            </LayoutContactItem>
        </LayoutContact>
    )
}

