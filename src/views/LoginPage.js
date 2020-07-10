import React from 'react';
import styled from 'styled-components';

import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Tone from 'components/atoms/Tone/Tone';
import AuthIcons from 'components/molecules/AuthIcons/AuthIcons';
import ToggleTheme from 'components/atoms/ToggleTheme/ToggleTheme';

const SyledHeading = styled(Heading)`
    margin-top: 40px;
    margin-left: 80px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LoginPage = () => {
    return (
        <AuthTemplate>
            <Wrapper>
                <Heading>Random Users <Tone>API</Tone></Heading>
                <ToggleTheme />
            </Wrapper>
            <SyledHeading secondary>Zaloguj się przez...</SyledHeading>
            <AuthIcons />
        </AuthTemplate>
    )
}

export default LoginPage;