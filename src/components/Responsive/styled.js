import styled from 'styled-components';

export const ResponsiveWrapper = styled.section`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #687af6, #4c37da 90%);
`;
export const ResponsiveContainer = styled.div`
    max-width: 1144px;
    margin: auto;
    height: 100%;
`;
export const ResponsiveContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 70px 0px 70px 0px;
`;
export const ResponsiveContentItem = styled.div`
    width: 100%;
    height: auto;
`;
export const ResponsiveContentItemTitle = styled.h3`
    font-weight: 700;
    color: #fff;
    font-size: 1.75rem;
    padding: 0px 0px 30px 0px;
`;
export const ResponsiveContentItemText = styled.p`
    color: #fff;
    font-size: 0.90rem;
    padding: 0px 0px 30px 0px;
`;
export const ResponsiveContentItemBtn = styled.button`
    background-color: #fff;
    color: #222;
    padding: 10px 25px 10px 25px;
    border-radius: 30px;
    border: 0px;
    text-transform: uppercase;
`;
export const ResponsiveContentItemImg = styled.img`
    max-width: 300px;
    position: absolute;
    margin-top: -120px;
`;