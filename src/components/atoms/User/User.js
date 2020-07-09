import React from 'react';
import styled from 'styled-components';

const StyledUser = styled.h3`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.light2 : 
      theme.color.leading2
    };
    cursor: pointer;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.color.leading};
`;

const User = ({ children, img, onClick }) => {
    return (
        <StyledUser onClick={onClick}>{children}<Image src={img} /></StyledUser>
    )
}

export default User;