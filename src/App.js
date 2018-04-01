import React, {Component} from 'react';

import store from './reducer/store';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import {Link} from 'react-router-dom';
import Home from './component/index';
import Head from './component/Home/Head';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Release from './component/Release/Release';


const history = createBrowserHistory();

/**
 * 自定义路由
 */
const routes = [
  {path: '/home', component: Home},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/release', component: Release},
];

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            {' | '}
            <Link to="/home">首页</Link>
            {' | '}
            <Link to="/register">注册</Link>
            {' | '}
            <Link to="/login">登陆</Link>
            {' | '}
            <Link to="/release">发布</Link>
            <Head/>
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
