import styled from 'styled-components';

const Input = styled.input`
    position: relative;
    padding: 10px 20px;
    color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.leading :
        theme.color.leading2
    };
    border: none;
    border-bottom: 2px solid;
    border-bottom-color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.dark2 : 
        theme.color.light2
    };
    font-size: 1.7rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    letter-spacing: 1px;
    background-color: transparent;

    &[type=number]::-webkit-inner-spin-button, 
    &[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    :focus,
    :active {
        border-bottom-color: ${({ theme }) => theme.mode === 'dark' ? 
            theme.color.leading : 
            theme.color.leading2
        };
        transition-property: border-bottom-color;
        transition-duration: 0.25s;
    }
`;

export default Input;