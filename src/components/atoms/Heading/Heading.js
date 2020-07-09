import styled, { css } from 'styled-components';

const Heading = styled.h1`
    color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.light2 : 
      theme.color.leading2
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