import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../actions/actions';
import {debug} from 'debug';
import Nav from './Home/Nav';
import SecectHouse from './SelectHouse/SelectHouse';
import Houses from './Houses/Houses';
import Page from './Page/Page';

class index extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Nav/>
        {/*<Brumb/>*/}
        <SecectHouse/>
        <div className="f-h10"/>
        <Houses/>
        <Page/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(index);
