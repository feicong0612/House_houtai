import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import Title from './Title';
import House from './House';

class house extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="f-main f-clear f-w1190">
        <Title/>
        <House/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(house);
