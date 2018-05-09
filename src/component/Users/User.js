import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link, withRouter} from 'react-router-dom';
import Title from './UserTitle';
import Users from './Users';
import InsertUser from './InsertUser';
import EditUser from './EditUser';

class User extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="item-right">
        <Title/>
        <Users/>
        <InsertUser/>
        <EditUser/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(User);
