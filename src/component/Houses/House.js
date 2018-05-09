import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link, withRouter} from 'react-router-dom';
import Title from './HouseTitle';
import Houses from './Houses';
import InsertHouse from './InsertHouse';
import EditHouse from './EditHouse';

class House extends Component {
  constructor(props) {
    super();
  }

  render() {
    let house = this.props.info;
    return (
      <div className="item-right">
        <Title/>
        <Houses/>
        <InsertHouse/>
        <EditHouse/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(House);
