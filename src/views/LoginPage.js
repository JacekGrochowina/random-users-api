import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from 'redux/actions/AuthActions';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

class LoginPage extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillUpdate(nextProps) {
        if (nextProps.auth) this.props.history.push("/app");
    }

    render() {
        return (
            <AuthTemplate>
                <Wrapper>
                    <Heading>Random Users <Tone>API</Tone></Heading>
                    <ToggleTheme />
                </Wrapper>
                <SyledHeading secondary>Zaloguj się przez...</SyledHeading>
                <AuthIcons onClick={this.props.signIn} />
            </AuthTemplate>
        )
    };
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn })(LoginPage);