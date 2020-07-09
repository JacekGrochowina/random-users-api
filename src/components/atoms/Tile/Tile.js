import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex-grow: ${({ grow }) => grow ? '1' : '0'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding: 30px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.dark2 : 
        theme.color.light2
    };
    transition-property: box-shadow;
    transition-duration: 0.25s;
    cursor: pointer;
    :hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
        border-color: ${({ theme }) => theme.mode === 'dark' ? 
            theme.color.leading : 
            theme.color.leading2
        };
    }
`;

const Icon = styled.div`
    width: ${({ size }) => size ? `${size}px` : '55px'};
    height: ${({ size }) => size ? `${size}px` : '55px'};
    margin-top: ${({ size }) => `${(55 - size) / 2}px`};
    margin-bottom: ${({ size }) => `${(55 - size) / 2}px`};
    
    background-color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.light : 
        theme.color.leading2
    };
    -webkit-mask: url(${({ path }) => path}) no-repeat center;
    mask: url(${({ path }) => path}) no-repeat center;
`;

const Text = styled.h3`
    margin-top: 30px;
    color: ${({ theme }) => theme.color.leading};
`;

const Tile = ({ children, icon, grow, size }) => {
    return (
        <Wrapper grow={grow}>
            <Icon path={icon} size={size} />
            <Text>{children}</Text>
        </Wrapper>
    )
}

export default Tile;