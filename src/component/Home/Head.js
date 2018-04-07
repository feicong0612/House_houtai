import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link} from 'react-router-dom';

class Head extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="header">
        <div className="head f-w1190 clearfix">
          <div className="city">
            <a className="fc-city" href="#" title="">常州</a>
          </div>
          <div className="head-m">
            <ul className="column-list clearfix">
              <li>
                <Link className="column" to="/home">返回首页</Link>
                <i className="column-arrow"/>
              </li>
            </ul>
          </div>
          <div className="head-r clearfix">
            <div className="f-fl reg-login" data-widget="app/ms_v2/common/base_page.js#userinfoWidget">
              <span className="reg-login-btn clearfix">
                <Link className="reg js-signup-btn" to="/register">注册</Link>
                <Link className="login js-signin-btn" to="/login">登陆</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(Head);
