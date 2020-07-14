import styled from 'styled-components';

const AuthUserPicture = styled.img`
    width: 70px;
    height: 70px;
    border: 2px solid;
    color: ${({ theme }) => theme.color.leading};
`;

export default AuthUserPicture;