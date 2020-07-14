import styled from 'styled-components';

const ButtonIcon = styled.button`
    width: ${({ size }) => size == null ? '50px' : `${size}px`};
    height: ${({ size }) => size == null ? '50px' : `${size}px`};
    color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.light : 
      theme.color.dark2
    };
    border: 1px solid;
    border-color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.dark2 : 
      theme.color.light2
    };
    background-color: transparent;
    background-image: url(${({ path }) => path});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 
        ${({ sizeIcon }) => sizeIcon == null ? '25px' : `${sizeIcon}px`};
    cursor: pointer;

    :hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
        border-color: ${({ theme }) => theme.mode === 'dark' ? 
            theme.color.leading : 
            theme.color.leading2
        };
    }
`;

export default ButtonIcon;