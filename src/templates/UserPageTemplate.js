import React from 'react';
import styled from 'styled-components';

import Baner from 'components/molecules/Baner/Baner';

const MainWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    flex-grow: 1;
    background-color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.dark : 
      theme.color.light
    };
`;

const UserPageTemplate = ({ children }) => {
    return (
        <MainWrapper>
            <Baner/>
            <Wrapper>
                {children}
            </Wrapper>
        </MainWrapper>
    )
}

export default UserPageTemplate;