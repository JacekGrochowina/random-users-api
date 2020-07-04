import bgLight from 'assets/images/bg-light.jpg';
import bgDark from 'assets/images/bg-dark.jpg';

export const mainTheme = {
    darkMode: {
        leading1: '#F5820C',
        leading2: '#DEDEDE',
        dark: '#232323',
        light: '#FFFFFF',
        bgImg: bgDark,
    },
    lightMode: {
        leading1: '#051E34',
        leading2: '#F5820C',
        dark: '#333333',
        light: '#FFFFFF',
        bgImg: bgLight,
    },
    fontFamily: {
        leading: '"Open Sans", sans-serif',
    },
    fontWeight: {
        light: 300,
        regular: 400,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
    }
}