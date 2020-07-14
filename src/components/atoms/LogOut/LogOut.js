import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from 'redux/actions/AuthActions';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.grey : 
        theme.color.dark2
    };
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    border-top: 1px solid;
    border-top-color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.dark2 :
        theme.color.light2
    };
    padding: 15px;
    cursor: pointer;

    :hover label {
        transform: translateX(10px);
    }
    :hover i {
        transform: translateX(20px);
    }
`;

const Text = styled.label`
    transition-property: transform;
    transition-duration: 0.25s;
    cursor: pointer;
`;

const Icon = styled.i`
    margin-left: 20px;
    transition-property: transform;
    transition-duration: 0.25s;
`;

class LogOut extends Component {
    render() {
        const type = "fas fa-sign-out-alt";
        return (
            <Wrapper onClick={this.props.signOut}>
                <Text>Wyloguj się </Text><Icon className={type} />
            </Wrapper>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
};

export default connect(mapStateToProps, { signOut })(LogOut);