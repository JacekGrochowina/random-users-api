import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from "react-redux";
import { fetchUser } from 'redux/actions/AuthActions';

import MainTemplate from 'templates/MainTemplate';

import LoginPage from 'views/LoginPage';
import UserPage from 'views/UserPage';

import requireAuth from 'components/auth/requireAuth';

class Root extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <MainTemplate>
            <Switch>
              <Route exact path={routes.login} component={LoginPage} />
              <Route exact path={routes.home} component={requireAuth(UserPage)} />
            </Switch>
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(Root);
