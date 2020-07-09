import React from 'react';
import { storiesOf } from '@storybook/react';
import AuthUser from './AuthUser';

storiesOf('Molecules/AuthUser', module)
    .add('Normal', () => <AuthUser src="https://randomuser.me/api/portraits/men/41.jpg">Milton<br/> Ross</AuthUser>)