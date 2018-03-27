import React, {Component} from 'react';

import store from './reducer/store';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './component/index';

import {Link} from 'react-router-dom';

const history = createBrowserHistory();

/**
 * 自定义路由
 */
const routes = [
  {path: '/', component: Home},
];

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            {/*{' | '}*/}
            {/*<Link to="/bookman">图书馆后台</Link>*/}
            {/*{' | '}*/}
            {/*<Link to="/about">About</Link>*/}
            {
              routes.map((route, index) =>
                <Route key={index} path={route.path} component={route.component}/>)
            }
          </div>
        </Router>
      </Provider>
    );
  }
}
