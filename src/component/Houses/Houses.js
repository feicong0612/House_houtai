import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {Link, withRouter} from 'react-router-dom';
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
        {this.props.value.house.map((item, idx) => {
          //console.log('标题', item.title);
          return (
            <House key={idx} info={item} idx={idx}/>
          )
            ;
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(house);
