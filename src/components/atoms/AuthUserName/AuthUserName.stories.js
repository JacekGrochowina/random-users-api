import React from 'react';
import { storiesOf } from '@storybook/react';
import AuthUserName from './AuthUserName';

storiesOf('Atoms/AuthUserName', module)
    .add('Normal', () => <AuthUserName>Milton Ross</AuthUserName>)