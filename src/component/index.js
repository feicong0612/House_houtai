import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../actions/actions';
import {Route, Router} from 'react-router';
import {debug} from 'debug';
import Head from './Home/Head';
import Content from './Content';
import List from './Home/List';

class index extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Head/>
        <Route path="/home" component={Content}/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(index);
