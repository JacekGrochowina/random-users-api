import React from 'react';
import styled from 'styled-components';

const AuthIcon = styled.div`
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: 35px 50%;

    max-width: 300px;
    margin: auto;
    padding-top: 25px;
    padding-right: 25px;
    padding-bottom: 15px;
    padding-left: 100px;
    border-left: 3px solid ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.dark2 : 
        theme.color.light2
    };
    color: ${({ color }) => color};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    cursor: pointer;

    :hover {
        border-left-color: ${({ color }) => color};
    }
`;

export default AuthIcon;