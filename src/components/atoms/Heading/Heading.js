import styled, { css } from 'styled-components';

const Heading = styled.h1`
    color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.darkMode.leading : 
      theme.lightMode.leading
    };

    ${({ secondary }) => secondary && css`
      font-size: 1.8rem;
      
      color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.leading : 
        theme.color.dark2
      };
    `}
`;

export default Heading;