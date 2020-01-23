import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.section`
    width: 100%;
    height: 100%;
    /* padding: 100px 0px; */
`;
export const FooterContainer = styled.div`
    max-width: 1144px;
    margin: auto;
    height: 100%;
`;
export const FooterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-top: 1px solid #3b5a78;
    padding: 50px 0px 50px 0px;
`;
export const FooterContentItem = styled.div`
    width: 100%;
    height: 100%;
`;
export const FooterContentItemBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
export const FooterContentItemUl = styled.ul`
    margin-left: 100px;

`;
export const FooterContentItemLi = styled.li`
    padding: 0px 0px 15px 0px;
`;
export const FooterContentItemA = styled(Link)`
    text-decoration: none;
    color: #7887a7;
    &:hover {
        color: #3b5a78;
    }
`;
export const Bold = styled.strong`
    color: #7887a7;
    font-weight:600;
`;
export const FooterInfoContact = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;
export const FooterInfoContactBox = styled.div`
    width: 100%;
`;
export const FooterInfoContactBoxUl = styled.ul`
    text-align: right;
`;
export const FooterInfoContactBoxLi = styled.li``;
export const FooterInfoContactBoxA = styled(Link)`
    text-align: right;
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    padding: 0px 0px 15px 0px;
    color: #7887a7;
    &:hover {
        color: #3b5a78;
    }
`;
export const Icon = styled.img`
    max-width: 13px;
    margin-left: 10px;
`;