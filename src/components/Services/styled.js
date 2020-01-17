import styled from 'styled-components';

export const ServicesWrapper = styled.section`
    width: 100%;
    height: 100%;
`;
export const ServicesContainer = styled.div`
    max-width: 1144px;
    margin: auto;
	height: 100%;
`;
export const ServicesContent = styled.div`
    width: 100%;
	height: 100%;
    padding: 80px 0px 80px 0px;
`;
export const ServicesBox = styled.div`
    width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
`;
export const ServicesBoxItem = styled.div`
    padding: 0px 16px;
    flex: 1 1 200px;
`;
export const ServicesImgItem = styled.img`
	display: block;
	max-width: 100px;
	margin: auto;
`;
export const ServicesTitleItem = styled.h3`
	padding: 44px 0px 13px 0px;
	text-transform: uppercase;
	font-weight: 800;
	letter-spacing: .1rem;
	text-align: center;
	color: #222;
`;
export const ServicesTextItem = styled.p`
	text-align: center;
	color: #555;
	line-height: 1.12rem;
`;