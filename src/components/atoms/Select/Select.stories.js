import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
import Option from './Option';

storiesOf('Atoms/Select', module)
    .add('Normal', () => 
        <Select>
            <Option>Volvo</Option>
            <Option>Saab</Option>
            <Option>Mercedes</Option>
            <Option>Audi</Option>
        </Select>
    )