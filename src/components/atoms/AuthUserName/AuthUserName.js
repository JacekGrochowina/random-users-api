import styled from 'styled-components';

const AuthUserName = styled.h2`
    color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.light2 : 
      theme.color.leading2
    };
`;

export default AuthUserName;