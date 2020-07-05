import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url(${({ theme }) => theme.mode === 'dark' ? theme.darkMode.bgImg : theme.lightMode.bgImg});
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 20px;
    padding: 60px 100px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.mode === 'dark' ? theme.color.dark : theme.color.light};
`;


const AuthTemplate = ({ children }) => {
    return (
        <MainWrapper>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </MainWrapper>
    )
}

export default AuthTemplate;