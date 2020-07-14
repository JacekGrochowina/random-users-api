import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import UserPlus from 'assets/icons/user-plus-solid.svg';

storiesOf('Atoms/ButtonIcon', module)
    .add('Normal', () => <ButtonIcon path={UserPlus}/>)