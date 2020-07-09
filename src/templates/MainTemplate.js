import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from 'redux/actions/ThemeActions';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import storage from 'local-storage-fallback';

function getInitialTheme() {
    const savedTheme = storage.getItem('theme');

    switch(savedTheme) {
        case 'light':
            return 'light';
        case 'dark':
            return 'dark';
        default:
            return 'light';
    }
}

const MainTemplate = ({ children }) => {

    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    // load Theme Mode from storage
    useEffect(() => {
        dispatch(setTheme(getInitialTheme()))
    }, [])

    // save Theme Mode to storage
    useEffect(() => {
        storage.setItem('theme', theme);
    }, [theme])

    return (
        <>
            <ThemeProvider theme={() => ({ ...mainTheme, mode: theme })}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </>
    )
}

export default MainTemplate;