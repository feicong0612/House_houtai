import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {Route, Router, IndexRoute} from 'react-router';
import {debug} from 'debug';
import List from '../Home/List';
import House from '../Houses/House';
import User from '../Users/User';

const routes = [
  {path: '/home/house', component: House},
  {path: '/home/user', component: User},
];

class index extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Route path="/home" component={List}/>
        {
          routes.map((route, index) =>
            <Route key={index} path={route.path} component={route.component}/>)
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(index);
