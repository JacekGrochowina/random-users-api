import React from 'react';
import { storiesOf } from '@storybook/react';
import AuthUserData from './AuthUserData';

storiesOf('Atoms/AuthUserData', module)
    .add('Normal', () => <AuthUserData type="email">milton@example.com</AuthUserData>)