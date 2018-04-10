import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link, withRouter} from 'react-router-dom';
import swal from 'sweetalert';

class login extends Component {
  constructor(props) {
    super();
    this.state = {
      uname: '',
      upwd: ''
    };
    this.login = this.login.bind(this);
    this.loginChange = this.loginChange.bind(this);
  }

  login(uname, upwd) {
    let a = this;
    this.props.queryUsers({uname: uname, upwd: upwd}).then(data => {
      if (data.payload.user.length > 0) {
        // console.log("登陆成功");
        a.props.history.push('/home');
        this.props.loginSuccess();
      }
      else {
        swal('登陆失败!', '用户名或密码错误！', 'error');
      }
    });
  }

  loginChange(name, value) {
    if (name === 'login_username') {
      this.setState({
        uname: value
      });
    }
    else if (name === 'login_password') {
      this.setState({
        upwd: value
      });
    }
    else {
      alert('未知错误！');
    }
  }

  render() {
    return (
      <div>
        <div id="login-content" className="active" style={{backgroundColor: '#21bb49'}}>
          <div className=" login-content">
            <span className="background-img">常州房产</span>
            <div className="loginWrap">
              <div className="switch-type">
                <span className="loginIcon pcIcon show"/>
              </div>
              <input name="next" type="hidden"/>
              <div className="loginBox">
                <div className="loginTabBox">
                  <span className="loginTab userTab active">账号密码登录</span>
                </div>
                <div className="loginPanelBox">
                  <form name="loginFrom_username" action="" method="post" className="loginPanel">
                    <div id="loginUsername_msg_error" className="error-box"/>
                    <div className="form-div">
                      <input type="text"
                             name="login_username"
                             className="input-text usename"
                             placeholder="用户名"
                             onChange={e => {
                               this.loginChange(e.target.name, e.target.value);
                             }}
                      />
                      <span className="clear-btn"/>
                    </div>
                    <div className="form-div">
                      <input type="password"
                             name="login_password"
                             className="input-text usepassword"
                             placeholder="密码"
                             maxLength="16"
                             onChange={e => {
                               this.loginChange(e.target.name, e.target.value);
                             }}
                      />
                      <span className="clear-btn" data-role="clear-btn"/>
                    </div>
                    <input className="submit" onClick={() => {
                      this.login(this.state.uname, this.state.upwd);
                    }} type="button" value="登录"/>
                  </form>
                </div>
              </div>
              <div className="linkBottom">
                <Link className="register"
                      to="/register">立即注册</Link>
              </div>
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

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(login);
