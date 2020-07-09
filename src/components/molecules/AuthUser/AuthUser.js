import React from 'react';
import styled from 'styled-components';
import AuthUserName from 'components/atoms/AuthUserName/AuthUserName';
import AuthUserPicture from 'components/atoms/AuthUserPicture/AuthUserPicture';
import AuthUserData from 'components/atoms/AuthUserData/AuthUserData';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`;

const StyledAuthUserPicture = styled(AuthUserPicture)`
    margin-right: 30px;
`;

const AuthUser = ({ children, src }) => {
    return (
        <Wrapper>
            <Header>
                <StyledAuthUserPicture src={src} />
                <AuthUserName>{children}</AuthUserName>
            </Header>

            <AuthUserData type="email">milton@example.com</AuthUserData>
            <AuthUserData type="tel.">698 325 220</AuthUserData>
        </Wrapper>
    )
}

export default AuthUser;