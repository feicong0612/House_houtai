import React, {Component} from 'react';

import store from './reducer/store';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import {Link, withRouter, Switch} from 'react-router-dom';
import Home from './component/index';
import Login from './component/Login/Login';

const history = createBrowserHistory();

/**
 * 自定义路由
 */
const routes = [
  {path: '/home', component: Home},
  {path: '/login', component: Login},

];

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              {
                routes.map((route, index) =>
                  <Route key={index} path={route.path} component={route.component}/>)
              }
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
