import React from 'react';
import { storiesOf } from '@storybook/react';

import AuthIcon from './AuthIcon';
import FacebookIcon from 'assets/icons/facebook.png';
import GoogleIcon from 'assets/icons/google.png';
import GithubIcon from 'assets/icons/github.png';

storiesOf('Atoms/AuthIcon', module)
  .add('Facebook', () => <AuthIcon icon={FacebookIcon} color="#3B579D">Facebook</AuthIcon>)
  .add('Google', () => <AuthIcon icon={GoogleIcon} color="#EA4335">Google</AuthIcon>)
  .add('Github', () => <AuthIcon icon={GithubIcon} color="#000000">Github</AuthIcon>)