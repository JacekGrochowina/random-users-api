import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Heading from './Heading';
import Tone from 'components/atoms/Tone/Tone';

storiesOf('Atoms/Heading', module)
  .addDecorator(withKnobs)

  .add('Normal', () => <Heading>Hello <Tone>World</Tone></Heading>)
  .add('Normal Knobs', () => {
    const name1 = text("notTone", "Hello")
    const name2 = text("Tone", "World")

    return <Heading>{name1} <Tone>{name2}</Tone></Heading>
  })

  .add('Secondary', () => <Heading secondary>Hello World</Heading>)