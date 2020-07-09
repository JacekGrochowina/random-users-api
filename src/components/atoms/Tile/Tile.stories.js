import React from 'react';
import { storiesOf } from '@storybook/react';
import Tile from './Tile';

import UserPlus from 'assets/icons/user-plus-solid.svg';

storiesOf('Atoms/Tile', module)
    .add('Normal', () => <Tile icon={UserPlus}>Dodaj</Tile>)