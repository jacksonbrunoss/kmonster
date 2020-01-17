import styled from 'styled-components';

export const InfoWrapper = styled.section`
    width: 100%;
    height: 100%;
`;
export const InfoContainer = styled.div`
    max-width: 1144px;
    margin: auto;
    height: 100%;
`;
export const InfoContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px 0px 110px 0px;
`;
export const InfoContentItem = styled.div`
    width: 100%;
    height: 100%;
    flex: 1 2 110px;
`;
export const InfoContentImgBox = styled.img`
    max-width: 400px;
    margin: auto;
`;
export const InfoContentItemTitle = styled.h3`
    font-size: 1.75rem;
	color: #222;
    padding: 10px 0px 37px 20px;
    font-weight: 500;
`;
export const InfoContentItemText = styled.p`
    font-size: 1.0rem;
	color: #555;
    padding: 0px 0px 10px 20px;
`;