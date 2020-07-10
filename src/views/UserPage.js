import React from 'react';
import styled from 'styled-components';

import UserPageTemplate from 'templates/UserPageTemplate'; 
import Button from 'components/atoms/Button/Button';
import Tile from 'components/atoms/Tile/Tile';
import ToggleTheme from 'components/atoms/ToggleTheme/ToggleTheme';

import UserPlus from 'assets/icons/user-plus-solid.svg';
import UserMinus from 'assets/icons/user-minus-solid.svg';
import UserTrash from 'assets/icons/trash-alt-solid.svg';


const Section = styled.div`
    padding: 8rem 0;
`;

const Container = styled.div`
    padding: 0 15px;
    width: 100%;
    max-width: 900px;
    margin: auto;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid;
    border-bottom-color: ${({ theme }) => theme.mode === 'dark' ? 
        theme.color.dark2 : 
        theme.color.light2
    };
`;

const TilesWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserPage = () => {
    return (
        <UserPageTemplate>
            <Section>
                <Container>
                    <Wrapper>
                        <Button>Zarządzaj użytkownikami</Button>
                        <ToggleTheme />
                    </Wrapper>

                    <TilesWrapper>
                        <Tile grow icon={UserPlus}>Dodaj</Tile>
                        <Tile grow icon={UserMinus}>Usuń</Tile>
                        <Tile grow size={45} icon={UserTrash}>Wyczyść</Tile>
                    </TilesWrapper>
                </Container>
            </Section>
        </UserPageTemplate>
    )
}

export default UserPage;