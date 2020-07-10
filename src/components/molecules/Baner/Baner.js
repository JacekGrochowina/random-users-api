import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Heading from 'components/atoms/Heading/Heading';
import Tone from 'components/atoms/Tone/Tone';
import User from 'components/atoms/User/User';
import AuthUser from 'components/molecules/AuthUser/AuthUser';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    background-image: url(${({ theme }) => theme.mode === 'dark' ? theme.darkMode.bgImg : theme.lightMode.bgImg});
`;

const Container = styled.div`
    padding: 15px;
    width: 100%;
    max-width: 900px;
    margin: auto;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 10vh;
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    padding: 10vh 20px;
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(-100%)'};
    transition-property: transform;
    transition-duration: 0.25s;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.mode === 'dark' ? 
      theme.color.dark : 
      theme.color.light
    };
    z-index: 99;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    transform: ${({ active }) => active ? 'scale(1)' : 'scale(0)'};
    opacity: ${({ active }) => active ? '1' : '0'};
    transition-property: opacity;
    transition-duration: 0.25s;
    z-index: 98;
`;

const Baner = () => {
    const auth = useSelector(state => state.auth);
    const [active, setActive] = useState(false);

    return (
        <Wrapper>
            <User
                onClick={() => setActive(!active)}
                img={auth.photoURL}
            >
                {auth.displayName}
            </User>
            <Container>
                <StyledHeading>Random Users <Tone>API</Tone></StyledHeading>
            </Container>

            <Overlay active={active} onClick={() => setActive(!active)}/>
            <Sidebar active={active}>
                <AuthUser 
                    src={auth.photoURL}
                    name={auth.displayName}
                    email={auth.email}
                    phone={auth.phoneNumber}
                />
            </Sidebar>
        </Wrapper>
    )
}

export default Baner;