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

const AuthUser = ({ src, name, email, phone }) => {
    return (
        <Wrapper>
            <Header>
                <StyledAuthUserPicture src={src} />
                <AuthUserName>{name}</AuthUserName>
            </Header>
            {email != null ? <AuthUserData type="email">{email}</AuthUserData> : null}
            {phone != null ? <AuthUserData type="phone">{phone}</AuthUserData> : null}
        </Wrapper>
    )
}

export default AuthUser;