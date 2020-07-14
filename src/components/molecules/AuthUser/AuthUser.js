import React from 'react';
import styled from 'styled-components';
import AuthUserName from 'components/atoms/AuthUserName/AuthUserName';
import AuthUserPicture from 'components/atoms/AuthUserPicture/AuthUserPicture';
import AuthUserData from 'components/atoms/AuthUserData/AuthUserData';
import LogOut from 'components/atoms/LogOut/LogOut';
import ToggleTheme from 'components/atoms/ToggleTheme/ToggleTheme';

const WrapperMain = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const WrapperLogOut = styled.div`
    margin-top: 20vh;
`;

const WrapperToggleTheme = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px;
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
        <WrapperMain>
            <Header>
                <StyledAuthUserPicture src={src} />
                <AuthUserName>{name}</AuthUserName>
            </Header>

            {email != null ? <AuthUserData type="email">{email}</AuthUserData> : null}
            {phone != null ? <AuthUserData type="phone">{phone}</AuthUserData> : null}

            <WrapperLogOut>
                <WrapperToggleTheme>
                    <ToggleTheme />
                </WrapperToggleTheme>
                <LogOut />
            </WrapperLogOut>
        </WrapperMain>
    )
}

export default AuthUser;