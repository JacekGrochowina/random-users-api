import styled from 'styled-components';

const Select = styled.select`
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

    :focus,
    :active {
        border-bottom-color: ${({ theme }) => theme.mode === 'dark' ? 
            theme.color.leading : 
            theme.color.leading2
        };
        transition-property: border-bottom-color;
        transition-duration: 0.25s;
    }


    &:after {
        position: absolute;
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
    }
`;

export default Select;