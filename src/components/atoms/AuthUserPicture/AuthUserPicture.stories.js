import React from 'react';
import { storiesOf } from '@storybook/react';
import AuthUserPicture from './AuthUserPicture';

const picture = "https://randomuser.me/api/portraits/men/41.jpg";

storiesOf('Atoms/AuthUserPicture', module)
    .add('Normal', () => <AuthUserPicture src={picture} />)