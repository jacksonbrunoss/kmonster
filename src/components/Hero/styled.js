import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroWrapper = styled.section`
    width: 100%;
    height: 550px;
`;
export const HeroContainer = styled.div`
    max-width: 1144px;
    margin: auto;
    height: 100%;
`;
export const HeroContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    
`;
export const HeroBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-beetwen;
    align-items: center;
`;
export const HeroBoxItem = styled.div`
    width: 100%;
`;
export const HeroBoxItemTitle = styled.h1`
    font-size: 2rem;
    line-height: 37px;
`; 
export const HeroBoxItemTextBold = styled.span`
    font-weight: 600;
`;
export const HeroBoxItemTextColor = styled.span`
    font-weight: 600;
    color: #6778f5;
`;
export const HeroBoxItemSubTitle = styled.p`
    line-height: 19px;
    max-width: 600px;
    padding: 15px 0px 30px 0px;
`;
export const HeroBoxItemBtnWrapper = styled(Link)`
    text-decoration: none;
`;
export const HeroBoxItemBtnBox = styled.button`
    padding: 15px 25px;
    background: #6778f5;
    color: #fff;
    border: 0px;
    font-weight: bold;
    font-size: 0.68rem;
    text-transform: uppercase;
    display: flex;
    border-radius: 30px;
    cursor: pointer;
`;
export const HeroBoxItemImg = styled.img`
    max-width: 60%;
    margin: auto;
`;