import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link} from 'react-router-dom';

class Head extends Component {
  constructor(props) {
    super();
    this.show = this.show.bind(this);
  }

  show() {
    //console.log('开始查询房屋信息');
    this.props.queryHouses();
    this.props.queryAllHouses({pageSize: 'all'});
  }

  componentWillMount() {
    this.show();
  }

  render() {

    return (
      <div id="header">
        {/*<button onClick={this.show}>测试</button>*/}
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
              <b className={this.props.value.open.login === 'error' ? '' : 'none'}>
                <span className="reg-login-btn clearfix">
                  <Link className="reg js-signup-btn" to="/register">注册</Link>
                  <Link className="login js-signin-btn" to="/login">登陆</Link>
                </span>
              </b>
              <b className={this.props.value.open.login === 'success' ? '' : 'none'}>
                <span className="reg-login-btn clearfix">
                 你好，{this.props.value.user[0].uname}
                  <a className="login js-signin-btn"
                     onClick={this.props.loginExit}
                  >注销</a>
                </span>
              </b>
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
