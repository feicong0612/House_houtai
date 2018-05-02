import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link, withRouter} from 'react-router-dom';
import swal from 'sweetalert';

class register extends Component {
  constructor(props) {
    super();
    this.state = {
      uname: '',
      upwd: '',
      upwd2: '',
      phone: ''
    };
    this.registerInfo = this.registerInfo.bind(this);
    this.checkInfo = this.checkInfo.bind(this);
  }

  registerInfo(name, val) {
    if (name === 'reg_username') {
      this.setState({
        uname: val
      });
    }
    else if (name === 'reg_phone') {
      this.setState({
        phone: val
      });

    }
    else if (name === 'phone_password') {
      this.setState({
        upwd: val
      });
    }
    else if (name === 'phone_password2') {
      this.setState({
        upwd2: val
      });
    }
    else {
      swal('505!', '未知错误！', 'error');
    }
  }

  checkInfo() {
    if (
      this.state.uname !== ''
      && this.state.phone !== ''
      && this.state.upwd !== ''
      && this.state.upwd2 !== ''
    ) {
      if (this.state.upwd === this.state.upwd2) {
        let a = this;
        this.props.queryUsers({uname: this.state.uname})
          .then(data => {
            if (data.payload.user.length === 0) {
              swal('注册成功!', 'success');
              a.props.history.push('/login');
            }
            else {
              swal('注册失败!', '用户名已存在！', 'error');
            }
          });
      }
      else {
        swal('注册失败!', '两次密码不一致！', 'error');
      }
    }
    else {
      swal('注册失败!', '注册信息必须填写完整！', 'error');
    }

  }

  render() {
    return (
      <div>
        <div className="logo-wrap clearfix">
          <div className="logo-title"><span className="user-reg">免费注册</span></div>
        </div>
        <div id="wrapper">
          <div className="clearfix reg-cont V5">
            <p className="desc">注册只需10秒，发布、管理信息更轻松</p>
            <div className="login-tab">
              <ul>
                <li className="active"><a href="#">手机快速注册</a>
                </li>
                <li className="li_fr">
                  已有账号?
                  <span>
                    <Link to="/login">立即登录</Link>
                  </span>
                </li>
              </ul>
            </div>

            <div className="tab-con2 js-tab js-phone">
              <div className="error-box V5" id="reg_phone_error" style={{display: 'none'}}>
                <span className="validatorMsg validatorError" id="reg_phone_error_content"/>
              </div>
              <form action="/" method="post" id="phone_register_form"
              >
                <div className="tab-cont" style={{display: 'block'}}>

                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="username">用户名：</label>
                    <input name="reg_username" type="text" placeholder="请填写用户名"
                           className="tab-input-text t_reg_username"
                           onChange={e => {
                             this.registerInfo(e.target.name, e.target.value);
                           }}
                    />
                    &nbsp;<span className="msg-box" id="tip_username"/>
                  </div>
                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="phone">手机号：</label>
                    <input type="text"
                           className="tab-input-text t_reg_phone"
                           placeholder="请填写您的手机号"
                           name="reg_phone"
                           onChange={e => {
                             this.registerInfo(e.target.name, e.target.value);
                           }}
                    />
                    &nbsp;<span id="tip_phone" className="msg-box"/>
                  </div>
                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="password">密码：</label>
                    <input
                      name="phone_password"
                      type="password"
                      className="tab-input-text t_phone_password"
                      maxLength="16"
                      onChange={e => {
                        this.registerInfo(e.target.name, e.target.value);
                      }}
                    />
                  </div>
                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="confirm-password">确认密码：</label>
                    <input
                      name="phone_password2"
                      type="password"
                      maxLength="16"
                      onChange={e => {
                        this.registerInfo(e.target.name, e.target.value);
                      }}
                      className="tab-input-text t_phone_password2"/>
                    <span className="msg-box" id="tip_phone_password2"/>
                  </div>
                  <div className="submit-box">
                    <input className="btn-org js-submit-btn t_submit"
                           type="button"
                           value="立即注册"
                           onClick={() => {
                             this.checkInfo();
                           }}
                    />
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        <ul id="footer" className="clearfix">
          <li><a href="#">关于我们</a>
            - <a href="#">房产推广</a>
            - <a href="#"> 渠道合作</a>
            -<a href="#">帮助中心</a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(register);
