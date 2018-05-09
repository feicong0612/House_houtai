import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import Head from './Head';
import {Link} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super();
    this.state = {
      title: ''
    };
    this.searchTitle = this.searchTitle.bind(this);
  }

  setTitle(value) {
    this.setState({
      title: value
    });
  }

  searchTitle() {
    //console.log('开始搜索',this.state.title);
    this.props.queryHouses({'title': this.state.title});
  }

  render() {
    return (
      <div>
        <Head/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(Nav);
