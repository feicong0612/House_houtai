import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class brumb extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="f-crumbs f-w1190">
          <a href="http://nc.ganji.com/">
            南昌赶集</a>
          &gt;
          <a href="/">南昌房产</a>
          &gt;
          <a href="/">南昌租房</a>
          &gt;
          <h1>安义租房</h1>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(brumb);
