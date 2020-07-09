import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
    padding-bottom: 15px;
`;

const Type = styled.label`
    display: block;
    width: 100%;
    margin-right: 50px;
    padding-bottom: 7px;
    margin-bottom: 10px;
    border-bottom: 1px solid;
    border-bottom-color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.dark2 : 
        theme.color.light2
    };
    color: ${({ theme }) => theme.color.leading};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Text = styled.label`
    padding-left: 15px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.grey : 
        theme.color.dark2
    };
`;

const AuthUserData = ({ children, type }) => {
    return (
        <Wrapper>
            <Type>{type}</Type>
            <Text>{children}</Text>
        </Wrapper>
    )
}

export default AuthUserData;