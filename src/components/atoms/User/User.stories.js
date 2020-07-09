import React from 'react';
import { storiesOf } from '@storybook/react';
import User from './User';
import Tone from 'components/atoms/Tone/Tone';

storiesOf('Atoms/User', module)
    .add('Normal', () => <User img="https://randomuser.me/api/portraits/men/41.jpg">Milton <Tone>Ross</Tone></User>)