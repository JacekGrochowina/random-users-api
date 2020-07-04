import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily.leading};

    {/* Only for testing - TO REMOVE LATER */}
    background-image: url(${({ theme }) => theme.mode === 'dark' ? theme.darkMode.bgImg : theme.lightMode.bgImg});
  }
`;

export default GlobalStyle;
