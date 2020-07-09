import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

import MainTemplate from 'templates/MainTemplate';

import LoginPage from 'views/LoginPage';
import UserPage from 'views/UserPage';

const Root = () => {
  return (
    <>
    <BrowserRouter>
      <MainTemplate>
          <Switch>
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.home} component={UserPage} />
          </Switch>
      </MainTemplate>
    </BrowserRouter>
    </>
  );
}

export default Root;
