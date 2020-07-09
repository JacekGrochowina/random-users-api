import React from 'react';
import styled from 'styled-components';

import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Tone from 'components/atoms/Tone/Tone';
import AuthIcons from 'components/molecules/AuthIcons/AuthIcons';

const SyledHeading = styled(Heading)`
    margin-top: 40px;
    margin-left: 80px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

const LoginPage = () => {
    return (
        <AuthTemplate>
            <Heading>Random Users <Tone>API</Tone></Heading>
            <SyledHeading secondary>Zaloguj się przez...</SyledHeading>
            <AuthIcons />
        </AuthTemplate>
    )
}

export default LoginPage;