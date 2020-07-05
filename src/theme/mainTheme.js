import bgLight from 'assets/images/bg-light.jpg';
import bgDark from 'assets/images/bg-dark.jpg';

export const mainTheme = {
    color: {
        leading: '#F5820C',
        light: '#FFFFFF',
        light2: '#DEDEDE',
        dark: '#232323',
        dark2: '#333333',
    },
    darkMode: {
        leading: '#DEDEDE',
        dark: '#232323',
        bgImg: bgDark,
    },
    lightMode: {
        leading: '#051E34',
        dark: '#333333',
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
    },
    fontSize: {
        xxs: '1rem',
        xs: '1.2rem',
        s: '1.6rem',
        m: '2.1rem',
        l: '2.4rem',
        xl: '4rem',
      },
}