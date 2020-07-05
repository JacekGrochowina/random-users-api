import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

import MainTemplate from 'templates/MainTemplate';

import LoginPage from 'views/LoginPage';

import Heading from 'components/atoms/Heading/Heading';
import Tone from 'components/atoms/Tone/Tone';

const Root = () => {
  return (
    <>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.login} component={LoginPage} />
          {/* <Route exact path={routes.home} component={HomePage} /> */}
        </Switch>
      </MainTemplate>
    </BrowserRouter>
    </>
  );
}

export default Root;
