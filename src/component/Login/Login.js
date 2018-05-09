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
      swal('505!', '未知错误！', 'error');
    }
  }

  render() {
    return (
      <div className="login">
        <h1>房屋租售平台后台管理系统</h1>
        <form method="post">
          <input type="text" name="u" placeholder="用户名" required="required"/>
          <input type="password" name="p" placeholder="密码" required="required"/>
          <button type="button" className="btn btn-primary btn-block btn-large">
            <Link to="/home">登录</Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(login);
