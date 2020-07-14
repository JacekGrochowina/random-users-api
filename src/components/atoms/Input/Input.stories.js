import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms/Input', module)
    .add('Default', () => <Input placeholder="Hello..." />)
    .add('Number', () => <Input type="number" placeholder="Number..."/>)
    .add('Text', () => <Input type="text" placeholder="Text..."/>)
