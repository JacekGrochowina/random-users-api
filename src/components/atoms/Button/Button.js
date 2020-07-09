import styled from 'styled-components';

const Button = styled.button`
    padding: 15px 30px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.light : 
      theme.color.dark2
    };
    border: 1px solid;
    border-color: ${({ theme }) => theme.mode === 'dark' ? 
      '#1a1a1a' : 
      theme.color.light2
    };
    background-color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.dark2 : 
      theme.color.light
    };
    box-shadow: 0 0 6px rgba(0,0,0,0);
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

export default Button;