import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../src/theme/mainTheme';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={{ ...mainTheme, mode: 'light' }}>{story()}</ThemeProvider>);

configure(loadStories, module);