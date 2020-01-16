import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnContactWapper = styled(Link)`
    text-decoration: none;
`;
export const BtnContactBox = styled.button`
    padding: 15px 25px;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    border-radius: 30px;
    cursor: pointer;
`;
export const BtnContactImg = styled.img`
    max-width: 30px;
    padding-right: 10px;
`;