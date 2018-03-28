import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class login extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div id="login-content" className="active" data-widget="js/v6/login/login.js#loginWidget"
             style={{backgroundColor: '#21bb49'}}>
          <div className=" login-content">
            <a className=" loginbg" target=" _blank" href="
             http://mobile.ganji.com/?ca_name=mobile_home_login">
              <img src="https://sta.ganjistatic1.com/src/image/v6/login/bg0.png"/>
            </a>
            <div className="loginWrap">
              <div className="switch-type">
                <span className="loginIcon pcIcon show" data-role="switchScanLogin"/>
                <span className="loginIcon qrIcon" data-role="switchScanLogin">
                  <i className="tipIcon"/>
                </span>
              </div>
              <input value="https://passport.ganji.com/register.php?next=http%3A%2F%2Fnc.ganji.com%3A%2Ffang1%2Fanyi%2F"
                     name="next" type="hidden"/>
              <div className="scanLoginBox" data-widget="js/v6/login/app_scan_login.js#scanLogin"
                   data-qr-url="https://passport.ganji.com/ewm_ajax.php?method=get_ewmimg"
                   data-loop-url="https://passport.ganji.com/ewm_ajax.php?method=check_token" data-qr-timer="300"
                   data-ajax-timer="3">
                <div className="scanImg" data-role="scanImg">
                  <p className="boxTitle">扫码登录更安全</p>
                  <div className="appQR clearfix">
                    <div className="appQRbox" data-role="imgQR">
                      <img className="erqcode-img" src="https://sta.ganjistatic1.com/src/image/v6/login/qrcode_160.png"
                           alt="" data-role="appQR"/>
                      <div className="erqcodefail" data-role="imgQRfail">
                        <div className="erqcodefailbg"/>
                        <div className="zIndex">
                          <p className="boxTitle">二维码已失效</p>
                          <div className="button" data-role="refimgQR">
                            点击刷新
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="helpImg" data-role="helpImg"/>
                  </div>
                </div>
                <div className="scanSuc" data-role="scanSuc">
                  <div className="scanSucIco"/>
                  <div className="scanSucTips">
                    <p>扫码成功</p>
                    <p>请在手机上确认!</p>
                  </div>
                </div>

                <p className="font12">
                  <i className="qrico"/>
                  打开赶集APP,扫一扫
                  <i className="h10">|</i>
                  <a
                    href="http://mobile.ganji.com/?ca_name=mobile_home_navb" className="link" target="_blank">
                    下载APP</a>
                </p>
              </div>

              <div className="loginBox">
                <div className="loginTabBox">
                  <span className="loginTab userTab active" data-role="loginTab">账号密码登录</span>
                  <span className="loginTab mobileTab" data-role="loginTab">手机验证码登录</span>
                </div>
                <div className="loginPanelBox">
                  <form name="loginFrom_username" action="" method="post" className="loginPanel" data-role="loginPanel"
                        data-widget="js/v6/login/login.js#usernameLoginFrom">
                    <div id="loginUsername_msg_error" className="error-box"/>
                    <div className="form-div">
                      <input type="text" name="login_username" className="input-text usename" placeholder="用户名/邮箱/手机号"
                             data-role="input-text" value="" data-regexp="^\s*$ 您输入的用户名不能为空，请输入 0"/>
                      <span className="clear-btn" data-role="clear-btn"/>
                    </div>
                    <div className="form-div">
                      <input type="password" name="login_password" className="input-text usepassword" placeholder="密码"
                             data-role="input-text" maxLength="16" data-required="required"
                             data-regexp="^\s*$ 您输入的密码不能为空，请输入 0"/>
                      <span className="clear-btn" data-role="clear-btn"/>
                    </div>
                    <div className="form-div js-checkcode" data-widget="js/v6/login/login.js#refleshLoginImg">
                      <input type="text" maxLength="4" name="login_checkcode" className="input-text w191"
                             id="login_checkcode_input" data-role="input-text"
                             data-regexp="^\s*$ 您输入的图片验证码不能为空，请输入 0;^\w{4}$ 您输入的图片验证码有误，请重新输入 1" placeholder="图片验证码"/>
                      <label className="label-imgcode">
                        <img className="login-img-checkcode"
                             data-url="https://passport.ganji.com/ajax.php?dir=captcha&amp;module=login_captcha"
                             data-role="reflesh" alt="图片验证码" style={{zoom: 1}}/>
                        <a className="refer-imgcode t_field" data-role="reflesh">刷新图片验证码</a>
                      </label>
                    </div>
                    <div>
                      <label className="label-checkbox" data-role="label-checkbox">
                        <input
                          value=""
                          name="next" type="hidden"/>
                        <span className="checkbox automaticLogin checked" data-role="checkbox"/>
                        <input value="14" name="setcookie" type="hidden" className="chk-vm"/>
                        <span>自动登录（公共场所勿选）</span>
                      </label>
                      <a target="_blank" href="http://www.ganji.com/user/get_password.php" className="link1 t_ftips">
                        忘记密码
                      </a>
                    </div>
                    <input className="submit" type="submit" data-role="loginUsernameSubmit" value="登录"/>
                  </form>
                  <form name="loginFrom_phone" className="loginPanel" data-role="loginPanel"
                        data-widget="js/v6/login/login.js#phoneLoginFrom">
                    <div id="loginPhone_msg_error" className="error-box"/>
                    <div className="form-div">
                      <input type="text" maxLength="11" name="phone" className="input-text phone" placeholder="手机号"
                             data-active="0" data-role="input-text"
                             data-regexp="^\s*$ 您输入的手机号不能为空，请输入 0;^1[3456789]\d{9}$ 请输入11位正确的手机号码 1"
                             data-required="required"/>
                      <span className="clear-btn" data-role="clear-btn"/>
                    </div>
                    <div className="form-div" data-widget="js/v6/login/login.js#refleshLoginImg">
                      <input type="text" name="phoneImgcode" maxLength="4" data-active="0"
                             className="input-text w191 phoneImgcode" data-role="input-text"
                             data-regexp="^\s*$ 您输入的图片验证码不能为空，请输入 0;^\w{4}$ 您输入的图片验证码有误，请重新输入 1"
                             data-required="required"
                             placeholder="图片验证码"/>
                      <label className="label-imgcode">
                        <img className="login-img-checkcode"
                             data-url=""
                             data-role="reflesh"
                             src=""
                             alt="图片验证码" style={{zoom: 1}}/>
                        <a className="refer-imgcode" data-role="reflesh">刷新图片验证码</a>
                      </label>
                    </div>
                    <div className="form-div">
                      <input type="text" maxLength="6" name="phonecheckcode" className="input-text w198 phonecheckcode"
                             placeholder="手机验证码" data-role="input-text" data-regexp="^\s*$ 您输入的手机验证码不能为空,请输入 0"
                             data-required="required"/>
                      <input type="button" name="sendCodeBtn" data-role="sendCodeBtn" className="getPhonecheckcode"
                             value="获取验证码"/>
                    </div>
                    <div>
                      <label className="label-checkbox" data-role="label-checkbox">
                        <span className="checkbox automaticLogin checked" data-role="checkbox"/>
                        <input value="14" name="setcookie" type="hidden" className="chk-vm"/>
                        <input
                          value=""
                          name="next" type="hidden"/>
                      </label>
                      <span className="label-span">我接受<a
                        href="http://www.ganji.com/misc/abouts/index.php?act=termofservice" target="_blank">&lt;&lt;
                        赶集服务条款&gt;&gt;</a>和<a href="http://www.ganji.com/misc/abouts/index.php?act=privacy"
                                              target="_blank">&lt;&lt;隐私权条款&gt;&gt;</a></span>
                    </div>
                    <input className="submit" type="submit" data-role="phoneSubmit" value="登录"/>
                  </form>
                </div>
              </div>
              <div className="linkBottom">
                <a className="other-login qq-login"
                   href="#">qq登录</a>
                <a className="other-login wb-login"
                   href="#">微博登录</a>
                <a className="other-login wx-login" data-role="wx-login">微信登录</a>
                <a className="register"
                   href="#">立即注册</a>
              </div>
              <div className="layer" data-role="layer"/>
              <div className="wxScanLogin" data-role="wxScanLoginPannel"
                   data-widget="js/v6/login/wx_scan_login.js#scanLogin"
                   data-qr-url="https://passport.ganji.com/ajax.php?dir=vip&amp;module=wei_xin&amp;type=1&amp;"
                   data-loop-url="https://passport.ganji.com/ajax.php?dir=vip&amp;module=wei_xin&amp;type=2&amp;"
                   data-qr-timer="300">
                <span className="layer-close" data-role="layer-close"/>
                <p className="title">微信登录</p>
                <img data-role="lgQR" className="wxqrcode-img"
                     src="https://sta.ganjistatic1.com/src/image/v6/login/qrcode_wx.png" alt=""/>
                <p className="wxTipsBox"><span className="wxTipsBg"/><span className="wxTips">请用微信扫描二维码登录</span>
                </p>
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
