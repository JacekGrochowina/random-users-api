import React from 'react';
import styled from 'styled-components';

import AuthIcon from 'components/atoms/AuthIcon/AuthIcon';

import FacebookIcon from 'assets/icons/facebook.png';
import GoogleIcon from 'assets/icons/google.png';
import GithubIcon from 'assets/icons/github.png';

const Wrapper = styled.div`
    margin: 20px 0 0 35px;
`;

const AuthIcons = () => (
    <Wrapper>
        <AuthIcon icon={FacebookIcon} color="#3B579D">Facebook</AuthIcon>
        <AuthIcon icon={GoogleIcon} color="#EA4335">Google</AuthIcon>
        <AuthIcon icon={GithubIcon} color="#000000">Github</AuthIcon>
    </Wrapper>
)

export default AuthIcons;