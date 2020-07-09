import styled from 'styled-components';

const AuthUserPicture = styled.img`
    width: 90px;
    height: 90px;
    border: 2px solid;
    color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.leading : 
      theme.color.leading2
    };
`;

export default AuthUserPicture;