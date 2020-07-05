import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import storage from 'local-storage-fallback';

function getInitialTheme() {
    const savedTheme = storage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : { ...mainTheme, mode: 'light' }
}

const MainTemplate = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);
    useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
                
                {/* Only for testing - TO REMOVE LATER */}
                <button
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0
                    }}
                    onClick={(e) => setTheme(
                        theme.mode === 'dark' ? 
                        { ...mainTheme, mode: 'light' } :
                        { ...mainTheme, mode: 'dark' }
                    )}
                >
                    Toggle Theme
                </button>
            </ThemeProvider>
        </>
    )
}

export default MainTemplate;